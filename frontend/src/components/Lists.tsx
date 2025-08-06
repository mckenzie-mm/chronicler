// This component displays the original unsorted lists.

export default function Lists({odd, even} : {odd?: number[], even?: number[]}) {
 
  return (
    <div className="list-wrapper">
       <div className="list-header">
          <h3 className="list-column">List 1</h3>
          <h3 className="list-column">List 2</h3>
      </div>
      <div className="list-container">
        <ul className="list-column">
          {
            even && even.map((val, index) => <li key={index}>{val}</li>)
          }
        </ul>
        <ul className="list-column">
          {
            odd && odd.map((val, index) => <li key={index}>{val}</li>)
          }
        </ul>
      </div>
    </div>
  );
}