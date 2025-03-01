import css from "./Options.module.css";

export default function Options({
  handleClick,
  totalFeedback,
  removeFeedback,
}) {
  return (
    <div className={css.butField}>
      <li>
        <button onClick={() => handleClick("good")} type="button">
          Good
        </button>
      </li>
      <li>
        <button onClick={() => handleClick("neutral")} type="button">
          Neutral
        </button>
      </li>
      <li>
        <button onClick={() => handleClick("bad")} type="button">
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button onClick={removeFeedback} type="button">
            Reset
          </button>
        </li>
      )}
    </div>
  );
}
