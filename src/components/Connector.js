export default function Connector() {
    return (
        <div className="flex justify-between items-center z-10 h-4 lg:h-8 w-8 lg:w-16 mb-[2.25rem] lg:mb-[4.5rem] ">
            <div className="h-2 w-1 rounded-r-sm border-l border-l-gray-600 bg-gray-500 lg:h-4 lg:w-2 lg:border-l-2"/>
            <div className="h-1 w-2 border-l border-l-gray-600 bg-gray-500 lg:h-2 lg:w-4 lg:border-l-2"/>
            <div
                className="h-2 w-1 rounded-l-sm border-l border-r-gray-600 border-l-gray-600 bg-gray-500 lg:h-4 lg:w-2 lg:border-r-2 lg:border-l-2"/>
            <div
                className="h-2 w-1 rounded-r-sm border-r border-r-gray-600 border-l-gray-700 bg-gray-500 lg:h-4 lg:w-2 lg:border-r-2 lg:border-l-2"/>
            <div className="h-1 w-2 border-r border-r-gray-600 bg-gray-500 lg:h-2 lg:w-4 lg:border-r-2"/>
            <div className="h-2 w-1 rounded-l-sm border-r border-r-gray-600 bg-gray-500 lg:h-4 lg:w-2 lg:border-r-2"/>
        </div>
    );
}
