export const separator = (styles, classNameVariable) => {
    const cNameIs = classNameVariable ? classNameVariable : '';
    const cNameArray = cNameIs.split(' ');
    let classNames = [];
    for (let i = 0; i < cNameArray.length; i++) {
        classNames = classNames.concat(styles[cNameArray[i]]);
    }
    const newNames = classNames.join(" ");
    return newNames;
};
