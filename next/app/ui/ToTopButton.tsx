function ToTopButton({ onClick }: { onClick: React.MouseEventHandler }) {
  return (
    <button
      className="btn btn-info"
      id="to-top-btn"
      onClick={onClick}
      title="Go to top"
    >
      &uarr; Edit Pattern
    </button>
  );
}

export default ToTopButton;
