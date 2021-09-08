import useStorage from '../hooks/storage';
import {useState, useEffect} from 'react';
function Todo(){
    const [items, putItems, clearItems] = useStorage();
    const [arr, setArr] = useState([
        {id: 1, text: "Huyen"},
        {id: 2, text: "Hoa"},
        {id: 3, text: "Hung"},
        {id: 4, text: "Duc"}
        ])
    const [obj, setObj] = useState({})
    function handleChange(evt){
        setObj({id: items.length + 1, text: evt.target.value});
    }
    function handleClick(){
        putItems([...items, obj]);
    }
    useEffect(() => {
        putItems(arr);
      }, []);
    
    return (
        <div>
        
            <div class='element-tag'>学生一覧：[{arr.map(item => item.text).join(", ")}]</div>
            <div class='element-tag'>
                <input
                    type='text'
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleClick}>確定</button>
            <div class='element-tag'>追加する名前：{obj.text}</div>
            <div class='element-tag'>新しい一覧：[{items.map(item => item.text).join(", ")}]</div>
        </div>
    );
}
export default Todo;