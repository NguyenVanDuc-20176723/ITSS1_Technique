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
    const [index, setIndex] = useState(1);
    
    function upChange(){
        
        if (index == items.length)
            setIndex(1);
        else setIndex(index+1);
    }
    
    function downChange(){
        
        if (index == 1) setIndex(items.length);
        else setIndex(index-1);
    }
    
    useEffect(() => {
        putItems(arr);
      }, []);
    
    return (
        <div>
        
            <div>学生一覧：[{items.map(item => item.text).join(", ")}]</div>
            {items.map(item => {
                if (item.id === index){
                    return (
                        <div>
                            <div>位置：{item.id}</div>
                            <div>名前：{item.text}</div>
                        </div>
                    )
                }
            })
            }
            
            <button onClick={upChange}>次に</button>
            <button onClick={downChange}>前に</button>
        </div>
    );
}
export default Todo;