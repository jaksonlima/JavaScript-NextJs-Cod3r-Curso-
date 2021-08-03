export default function Jsx2() {
  const arrayHTML = [
    <li key="0">a</li>,
    <li key="1">b</li>,
    <li key="2">c</li>
  ]
  return (
    <div>
      <h1>Jsx2</h1>
      <ul>{arrayHTML.map(item => (
        item
      ))}</ul>
    </div>
   );
}