import React from 'react';
class Module extends React.Component{
    render(){
        /*
        const modLayout={
            padding: "100px",
            flexWrap: "wrap",
            flexDirection: "column",
            height: "100%",
            listStyleType: "none",
            display: "flex",
            justifyContent: "spaceBetween",
            alignItems: "flex-start"
        };
        const SmallerItems={
            width: "33%",
            height: "200px",
            marginBottom: "10px",
            flex: "1",
            padding: "10px",
            order: this.props.order
        }
        const LargerItem={
            flex: "0 0 100%",
            width: "50%"
        }
        */
        const MainBox={
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            height: "25vw",
            listStyleType: "none",
            padding: "10px"
          };

          const descriptionBox={
            fontSize: "20px",
            position: "center",
            textAlign: "center",
            fontFamily: "Verdana"
          };

          const titleBox={
            textAlign: "center",
            flex: "0 0 50%",
            height: "25vw",
            width: "50%",
            fontSize: "50px",
            padding: "80px 0",
            fontFamily: "Microsoft Sans Serif"
          };

        return(
            <div style={MainBox}>
               <div style={titleBox}>
                   {this.props.title}
                   <div style={descriptionBox}>
                    {this.props.description}
                   </div>
               </div>
               <div style={descriptionBox} >
                    <img className="ModImage" src="https://i.ibb.co/XW29C39/Adult-capybara.jpg"></img>
               </div>
               
            </div>
        );
    }
}
export default Module;
