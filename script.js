const changeHandler = e => {
    const value = e.value
    e.value = value.replace(/\D/g, '').substr(0, 14);
}


