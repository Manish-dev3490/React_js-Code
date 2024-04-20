export const ItemCards = ({ data }) => {
    return (
        <div>
            {
                data.map((item) => {
                    console.log(item.card.info);
                    return (
                        <div>{item.card.info.name}</div>
                    )
                })
            }
        </div>
    )
}