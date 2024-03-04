import AppGuildItem from "./AppGuildItem";


const AppGuildList = () => {
    const appGuideSteps = [
        { id: 1, icon: '🔍', title: 'Search', description: 'Find the products or exporters you are looking for.' },
        { id: 2, icon: '🛒', title: 'Explore Categories', description: 'Discover various categories of African goods.' },
        { id: 3, icon: '💬', title: 'Connect', description: 'Connect with exporters and initiate trade discussions.' },
        { id: 4, icon: '🌐', title: 'Expand Your Network', description: 'Grow your network for more trade opportunities.' },
    ];
    return(
        <section className="py-20">
            <div className="container mx-auto text-center max-w-[1128px]">
            <h2 className="text-2xl font-medium text-center mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {appGuideSteps.map((step) => (<AppGuildItem key={step.id} step={step}/>))}
            </div>
            </div>
        </section>
    )
}

export default AppGuildList;

