// import React from 'react';
// import {useState} from "react";
// import Button from "@mui/material/Button";
//
// const AddHostelForm = ({title, handleClick}:{title:any, handleClick:any}) => {
//     const [hostelName, setHostelName] = useState('');
//     const [city, setCity] = useState('');
//     const [address, setAddress] = useState('');
//     const [amountOfHostelRooms, setAmountOfHostelRooms] = useState('');
//     const [price, setPrice] = useState('');
//     const [shortDescription, setShortDescription] = useState('');
//     const [fullDescription, setFullDescription] = useState('');
//     const [image, setImage] = useState('');
//     const [rating, setRating] = useState('');
//     // словарь
//
//     return (
//         <div>
//             <input
//                 type={"text"}
//                 value={hostelName}
//                 onChange={(e) => setHostelName(e.target.value)}
//                 placeholder={hostelName}
//             />
//             <input
//                 type={"text"}
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 placeholder={city}
//             />
//             <input
//                 type={"text"}
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 placeholder={address}
//             />
//             <input
//                 type={"text"}
//                 value={amountOfHostelRooms}
//                 onChange={(e) => setAmountOfHostelRooms(e.target.value)}
//                 placeholder={amountOfHostelRooms}
//             />
//             <input
//                 type={"number"}
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 placeholder={price}
//             />
//             <input
//                 type={"text"}
//                 value={shortDescription}
//                 onChange={(e) => setShortDescription(e.target.value)}
//                 placeholder={shortDescription}
//             />
//             <input
//                 type={"text"}
//                 value={fullDescription}
//                 onChange={(e) => setFullDescription(e.target.value)}
//                 placeholder={fullDescription}
//             />
//             <input
//                 type={"image"}
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
//                 placeholder={image}
//             />
//             <input
//                 type={"text"}
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//                 placeholder={rating}
//             />
//
//             <Button onClick={() => handleClick(hostelName, city, address, amountOfHostelRooms, price, shortDescription, fullDescription, image, rating)}>
//                 {title}
//             </Button>
//         </div>
//     );
// };
//
// export default AddHostelForm;
import React from 'react';
import {Grid} from "@material-ui/core";

const AddHostelForm = () => {
    return (
        <Grid container
              direction="column"
              justify={"center"}
        >
            <input
                type={"text"}
            />
            <input
                type={"text"}
            />
            <input
                type={"text"}
            />
            <input
                type={"text"}
            />
            <input
                type={"number"}

            />
            <input
                type={"text"}

            />
            <input
                type={"text"}

            />
            <input
                type={"image"}

            />
            <input
                type={"text"}

            />

        </Grid>
    );
};

export default AddHostelForm;