import {useEffect, useState} from 'react';
function ParagraphDisplay({paragraph}){
    // форматирование
    // console.log('PARAGRAPH ->', paragraph);
    let [formated_content, setFormated_Content] = useState(paragraph);
    // formated_content.forEach(el => {
    //     let newArr=[]
    //     let sentence = el.content.split('.')[0];
    //     el.content = sentence + ".";
        
    // });

    useEffect(()=>{
        console.log("frc->", formated_content);
        
    let newArr=[]
    formated_content.forEach(el => {

        let sentence = el.content.split('.')[0];
        // el.content = sentence + ".";
        
        newArr.push({content: sentence + '.'});
    });
    setFormated_Content(newArr);
    


    }, [])
    
    const [hide, setHide] = useState(true); //
    function ShowParagraph(){
        if(hide){
            setHide(false);
        }
        else
        {
            setHide(true);
        }
    } 
    // console.log(formated_content);

    return(
        <div className="paragraph-wrapper">
            {
              
                formated_content.map((p, index) =>{
                    // console.log(paragraph[index]);
                    
                    return <div onClick={ShowParagraph} className = "paragraph">{hide ? p.content : paragraph[index].content}</div>
                })
            }
        </div>
    );
}
export default ParagraphDisplay;