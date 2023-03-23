function  HeaderMenu({items}) {
    return <ul className="list-style">
        {items.map((item) => <li>{item}</li>)}
    </ul>
}

export default HeaderMenu