import "./VerifyEmail.css";
import { useAuthValue } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { sendEmailVerification } from "firebase/auth";

function VerifyEmail() {
  const [buttonDisable, setButtonDisable] = useState(false);
  const [time, setTime] = useState(60);
  const [timeActive, setTimeActive] = useState(false);
  

  useEffect(() => {
    let interval = null;
    if (timeActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setTimeActive(false);
      setTime(60);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }),
    [timeActive, time];

  const { currentUser } = useAuthValue();
  const resendEmailVerification = () => {
    setButtonDisable(true);
    sendEmailVerification(auth.currentUser)
      .then(() => {
        setButtonDisable(false);
        setTimeActive(true);
      })
      .catch((err) => {
        alert(err.message);
        setButtonDisable(false);
      });
  };
  return (
    <div className="center">
      <div className="verifyEmail">
        <h1>Verify your Email Address</h1>
        <p>
          <strong>
            A Verification email has been sent to:
            <span>{currentUser?.email}</span>
          </strong>
          <br />
        </p>
        <span>Follow the instruction in the email to verify your account</span>
        <button onClick={resendEmailVerification} disabled={buttonDisable}>
          Resend Email {timeActive&time}
        </button>
      </div>
    </div>
  );
}

export default VerifyEmail;
