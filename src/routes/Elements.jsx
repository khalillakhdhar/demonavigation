
export default function Elements() {
    const specialites = ['P.O.O', 'WEB DEV', 'WEB DESIGN', 'SYSTEM TESTING'];

  return (
    <div>
      <h2>Specialites</h2>
      <ul>
        {specialites.map((specialite, index) => (
          <li key={index}> <a href={`/details/${index + 1}`}> {specialite}</a> </li>
        ))}
      </ul>
    </div>



    )
}
