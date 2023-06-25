import Card from './Card'
import './SelectionGrid.scss'

export default function SelectionGrid() {
  return (
    <div className="selection__container">
        <div className="grid">
            {Array.from({ length: 10 }).map( (n, i) => {
                return (
                    <Card key={i}></Card>
                );
            })}
        </div>
        <div className="filters">
            
        </div>

        <div className="slots">
            <div className="slots__container">
              {Array.from({ length: 5 }).map( (n, i) => {
                  return (
                      <Card key={i}></Card>
                  );
              })}
            </div>
        </div>
    </div>
    
  )
}
