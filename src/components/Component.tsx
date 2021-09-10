import "./component.scss";

interface Test {
  msg?: string;
}

export default function Test({
  msg = "Darek",
}: Test): JSX.Element {
  return (
    <div>
      <h1>HALLO You 1</h1>
      <button>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.google.de/'>
          {msg}
        </a>
      </button>
    </div>
  );
}
