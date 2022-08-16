import React from 'react'
import './index.css'

export default function Pagination() {
    return (
        <div>
            <h2>Active and Hoverable Pagination</h2>

            <p>Move the mouse over the numbers.</p>

            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a className="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    )
}
