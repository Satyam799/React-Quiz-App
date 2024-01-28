import { Quizuse } from "./Quizcontext";

export default function Loader() {
const {status}=Quizuse()

return (status==='loading' &&
<div className="loader-container">
  <div className="loader"></div>
    <p>Loading questions...</p>
    </div>
  );
}
