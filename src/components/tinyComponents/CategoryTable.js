import React, { useEffect } from 'react'

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

                            if (data.CurrentSpent < data.MaxSpent) {
                                return (
                                    <div key={key}>
                                        {<tr>
                                            <td>
                                                {data.Name}
                                            </td>
                                            <td style={{ backgroundColor: 'green' }}>

                                                {data.CurrentSpent}
                                            </td>
                                            <td>
                                                {data.MaxSpent}
                                            </td>
                                        </tr>
                                        }
                                    </div>
                                );

                            } else {
                                return (
                                    <div key={key}>
                                        {<tr>
                                            <td>
                                                {data.Name}
                                            </td>
                                            <td style={{ backgroundColor: 'red' }}>

                                                {data.CurrentSpent}
                                            </td>
                                            <td>
                                                {data.MaxSpent}
                                            </td>
                                        </tr>
                                        }
                                    </div>
                                );

                            }

                        })}
                    </tr>
                </tbody>
            </table>
        </div>


    )
}
