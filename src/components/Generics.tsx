const Generics = () => {
    const makeArr = <T, K>(x: T, y: K): [T, K] => {
        return [x, y];
    };
    const makeFullName = <T extends { firstName: string; lastName: string }>(
        obj: T
    ) => {
        return {
            ...obj,
            fullName: obj.firstName + ' ' + obj.lastName
        }; 
    };
    const val = makeFullName({
        firstName: 'krish',
        lastName: 'kashiwala',
        num: 3000
    });

    return (
        <div>
            {makeArr('love u', 3000)} <br /> {val.num}
        </div>
    );
};
export default Generics;
 