import { Quizuse } from "./Quizcontext";

function Error() {
  const {status}=Quizuse()

  return (status==='error' &&
    <p className="error">
      <span>💥</span> There was an error fecthing questions.
    </p>
  );
}

export default Error;
