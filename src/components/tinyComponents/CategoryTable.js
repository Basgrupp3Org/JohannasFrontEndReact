import React from 'react'

export default function CategoryTable(props) {
    return (

        <div>
            <table className="categoryTable">
                <thead>
                    <tr>
                        <th>
                            Category Name:
                       </th>
                        <th>
                            Current Spent:
                       </th>
                        <th>
                            Max To Spend:
                       </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {props.Categories.map((data, key) => {
                            return (
                                <div key={key}>
                                    {<tr>
                                        <td>
                                            {data.Name}
                                        </td>
                                        <td>
                                            {data.CurrentSpent}
                                        </td>
                                        <td>
                                            {data.MaxSpent}
                                        </td>
                                    </tr>
                                    }
                                </div>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
        </div>


    )
}
