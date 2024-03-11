import React from "react";

function Categories() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const categoriesRender = () => {
        return categories.map((category, index) => {
            return (
                <li key={category} onClick={() => setActiveIndex(index)} className={activeIndex === index ? 'active' : ''}>{category}</li>
            )
        })
    }


    return (
        <div className="categories">
            <ul>
                {categoriesRender()}
            </ul>
        </div>
    )
}

export default Categories