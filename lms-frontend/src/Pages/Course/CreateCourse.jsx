function CreateCourse(){
        return (
            <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Create Course</h1>
                <form className="space-y-5 mt-5">
                    <input type="text" placeholder="Title" className="w-full px-4 py-2 border-2 border-gray-300 rounded-md outline-none" />
                    <input type="text" placeholder="Description" className="w-full px-4 py-2 border-2 border-gray-300 rounded-md outline-none" />
                    <input type="text" placeholder="Category" className="w-full px-4 py-2 border-2 border-gray-300 rounded-md outline-none" />
                    <button type="submit" className="bg-yellow-500 py-2 px-4 rounded-md font-bold text-white">Create Course</button>
                </form>
            </div>
            </>
        )
}
export default CreateCourse;