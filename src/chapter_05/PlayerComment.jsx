import React from "react";

const styles ={
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "2px dotted Blue",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "Green",
        fontSize: 25,
        fontWeight: "bold",
    },
    commentText: {
        color: "red",
        fontSize: 16,
    },
};

function PlayerComment(props){
    
    return (
        <div style = {styles.wrapper}>
            <div style = {styles.imageContainer}>
                <img
                    src={props.src}
                    style={styles.image}
                />
            </div>

            <div style = {styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default PlayerComment;