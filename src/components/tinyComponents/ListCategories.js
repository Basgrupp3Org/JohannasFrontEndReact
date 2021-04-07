import Category from './Category'

export default function ListCategories(props) {
  return (
    <div>
      <>
        <div className="category-container">
          {props.categories.map((data, key) => {
            return (
              <div key={key}>
                {
                  <Category Name={data.Name} MaxSpent={data.MaxSpent} Id={data.Id} />
                }
              </div>
            );
          })}
        </div>
      </>
    </div>
  )
}