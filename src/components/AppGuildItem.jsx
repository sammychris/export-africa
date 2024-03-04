const AppGuildItem = ({step}) => {
    return(
        <div key={step.id} className="text-center">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-lg font-medium">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
        </div>
    )
}

export default AppGuildItem;

