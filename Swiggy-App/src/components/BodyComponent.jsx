import { Restacard } from "./Restacard"
// In body component we have to fetch restaurents card with their live information which we can do through the swiggy orignal production api

 export const BodyComponent = () => {
    return (
        <div className="Resta-list">
            <Restacard src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" title="pizza corn" description="double cheeze pizza"/>

            <Restacard src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" title="pizza corn" description="double cheeze pizza"/>
        </div>
        
    )
}


