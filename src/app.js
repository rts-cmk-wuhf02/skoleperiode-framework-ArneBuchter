    const Pet = ({ name, animal, breed}) =>{
        return React.createElement("div", {}, [
            React.createElement("h1", {}, name),
            React.createElement("h2", {}, animal),
            React.createElement("h2", {}, breed)
        ]);
    };

        const App = () => {
            return React.createElement(
                "div",
                {},
                [
                    React.createElement("h1", {}, "Adobt Me!"),
                    React.createElement(Pet, {
                        name: "Leo", 
                        animal: "Rabbit", 
                        breed: "Lionhead"
                    }),
                    React.createElement(Pet, {
                        name: "Ramsey", 
                        animal: "Dog", 
                        breed: "Mix"
                    }),
                    React.createElement(Pet, {
                        name: "Doink", 
                        animal: "Rabbit", 
                        breed: "Lionhead"
                    })
                
                ]
            );
        }; 

        ReactDOM.render(
            React.createElement(App),
            document.getElementById("root")
        );