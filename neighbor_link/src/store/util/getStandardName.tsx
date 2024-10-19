const getStandardName = (name: string) => {
    return (
        name ? (name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLocaleLowerCase()) : (name="Home")
    )
}

export default getStandardName;