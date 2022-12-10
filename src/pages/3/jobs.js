import './jobs.scss';
import Header from '../global/header';
import { useState, useEffect } from 'react';
const choices = ["餐飲臨售業", "科技業", "時薪", "月薪", "台北", "桃園", "新竹", "台中", "台南", "高雄"];
const food = ["儲備幹部", "銷售", "內場", "外場", "人資"];
const tech = ["軟體工程師","研發工程師","研發技術員","製成工程師","殷備工程師","接案工程師","分析工程師","設計工程師","封装工程師","助理工程師","客服工程師",
    "業務人員","技術工程師","測試工程師","行政人員","生產技術員","技術操作員","焊錫技術員","品保工程師","品保人員","品管包装員"];

function JobsPage () {

    const [choosed, setChoosed] = useState([false, false, false, false, false, false, false, false, false, false]);
    const [foodc, setFoodc] = useState([false, false, false, false, false]);
    const [techc, setTechc] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
        false, false, false, false, false, false]);
    const [filter, setFilter] = useState([]);
    const [save, setSave] = useState([])

    useEffect(() => {
        if (localStorage.getItem("choosed")) setChoosed(JSON.parse(localStorage.getItem("choosed")));
        if (localStorage.getItem("foodc")) setFoodc(JSON.parse(localStorage.getItem("foodc")));
        if (localStorage.getItem("techc")) setTechc(JSON.parse(localStorage.getItem("techc")));
        setSave(new Array(joblist.length).fill(false));
    }, []);

    useEffect(() => {
        let newArr = [];
        var i;
        for (i=0; i<choosed.length; i++) {
            if (choosed[i]) newArr.push(choices[i]);
        }
        for (i=0; i<foodc.length; i++) {
            if (foodc[i]) newArr.push(food[i]);
        }
        for(i=0; i<techc.length; i++) {
            if (techc[i]) newArr.push(tech[i]);
        }
        // // console.log("?")
        setFilter(newArr);
    }, [setFilter, choosed, foodc, techc]);
    // }, []);

    const deleteFilter = (idx) => {
        console.log("Delete" + String(filter[idx]));
        let newArr = [...filter];
        newArr.splice(idx, 1); // 1 item from idx
        setFilter(newArr);
        // only set local storage when go to other pages
    };

    // const savejob = (idx) => {

    // }

    return (
        <div className="Jobs">
            <Header/>
            <div className="body">
                <div className="back" onClick={() => {
                    window.location.href = "./filter";
                }}>←重新篩選職缺</div>
                <div className="filters">
                    {filter.map((f, idx)=> (
                        <div className='f' key={idx} >
                            <div className='x' onClick={() => {deleteFilter(idx)}}>X</div>
                            {f}
                        </div>
                    ))}
                </div>
                <div className="jobs">
                    {joblist.map((j, idx) => (
                        <div className="j" key={idx}>
                            <div className='jc'>
                                <div className="name">{j.name}</div>
                                <div className="req">{j.edu}</div>
                            </div>
                            <div className='jc'>
                                <div className="num">{j.num}</div>
                                <div className="comp">{j.company}</div>
                            </div> 
                            <div className='jc'>
                                <div className='pla'>{j.place}</div>
                                <div className='sal'>{j.salary}</div>
                            </div> 
                            {save[idx]?
                                <div className='save y'>SAVE</div> :
                                <div className='save'>NOT</div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const joblist = [{name: '半導體業務人員', edu: '大學以上畢業', num: 1,
    company: '佳能半導體設備股份有限公司', place: '新竹地區', salary: '40000以上',
    job_type: '業務人員', place_type: '新竹', salary_type: '月薪'},
    {name: '人事行政人員', edu: '大專以上畢業', num: 1,
    company: '佳能半導體設備股份有限公司', place: '新竹地區', salary: '35000以上',
    job_type: '行政人員', place_type: '新竹', salary_type: '月薪'},
    {name: '稽核管理師(行政專員)', edu: '大學以上畢業', num: 1,
    company: '佳能半導體設備股份有限公司', place: '新竹地區', salary: '35000以上',
    job_type: '行政人員', place_type: '新竹', salary_type: '月薪'},
    {name: 'CIP 推進課專員(行政專員)', edu: '大學以上畢業', num: 1,
    company: '佳能半導體設備股份有限公司', place: '新竹地區', salary: '35000以上',
    job_type: '行政人員', place_type: '新竹', salary_type: '月薪'},
    {name: '真空設備維護工程師', edu: '大學以上畢業', num: 1,
    company: '佳能半導體設備股份有限公司', place: '新竹地區', salary: '45000以上',
    job_type: '設備工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '半導體設備維護工程師', edu: '大專以上畢業', num: 1,
    company: '佳能半導體設備股份有限公司', place: '新竹地區', salary: '45000以上',
    job_type: '設備工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '半導體應用技術工程師', edu: '大學以上畢業', num: 1,
    company: '佳能半導體設備股份有限公司', place: '新竹地區', salary: '45000以上',
    job_type: '技術工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '半導體技術支援工程師', edu: '大學以上畢業', num: 1,
    company: '佳能半導體設備股份有限公司', place: '新竹地區', salary: '45000以上',
    job_type: '技術工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '軟體工程師', edu: '大學以上畢業', num: 1,
    company: '佳能半導體設備股份有限公司', place: '新竹地區', salary: '45000以上',
    job_type: '軟體工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '軟體工程師', edu: '大學以上畢業', num: 1,
    company: '佳能半導體設備股份有限公司', place: '台中市', salary: '45000以上',
    job_type: '軟體工程師', place_type: '台中', salary_type: '月薪'},
    {name: '軟體工程師', edu: '大學以上畢業', num: 1,
    company: '佳能半導體設備股份有限公司', place: '台南市', salary: '45000以上',
    job_type: '軟體工程師', place_type: '台南', salary_type: '月薪'},
    {name: '製造助理工程師', edu: '不拘', num: 2,
    company: '昇陽國際半導體股份有限公司', place: '新竹地區', salary: '30250~46250',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '品保助理工程師', edu: '不拘', num: 2,
    company: '昇陽國際半導體股份有限公司', place: '新竹地區', salary: '30250~51250',
    job_type: '品保工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '設備工程師', edu: '大專以上畢業', num: 2,
    company: '昇陽國際半導體股份有限公司', place: '新竹地區', salary: '32000 以上',
    job_type: '設備工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '品保工程師', edu: '大學以上畢業', num: 2,
    company: '昇陽國際半導體股份有限公司', place: '新竹地區', salary: '32000 以上',
    job_type: '品保工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '故障分析工程師', edu: '大專以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '36000~50000',
    job_type: '分析工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '材料分析工程師', edu: '大專以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '36000~50000',
    job_type: '分析工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '可靠度分析工程師', edu: '大專以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '36000~50000',
    job_type: '分析工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '接案工程師', edu: '大學以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '36000~50000',
    job_type: '接案工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '測試工程師', edu: '大專以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '台北市/新竹地區', salary: '36000~50000',
    job_type: '測試工程師', place_type: '台北, 新竹', salary_type: '月薪'},
    {name: '封裝工程師', edu: '大專以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '36000~50000',
    job_type: '封裝工程師', place_type: '新竹', salary_type: '月薪'},
    {name: 'Notes 工程師 ', edu: '大學以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '36000~50000',
    job_type: 'Notes 工程師 ', place_type: '新竹', salary_type: '月薪'},
    {name: '業務工程師', edu: '大學以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '業務工程師', place_type: '新竹', salary_type: '面議'},
    {name: '副管理師', edu: '大專以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '36000~50000',
    job_type: '管理師', place_type: '新竹', salary_type: '月薪'},
    {name: '技術員', edu: '不拘', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '27000~45000',
    job_type: '技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '品保資深工程師', edu: '大學以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '36000~50000',
    job_type: '品保工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '製程資深工程師', edu: '大學以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '製程工程師', place_type: '新竹', salary_type: '面議'},
    {name: '製程助理工程師', edu: '不拘', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '32000~50000',
    job_type: '製程工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '設備(資深)工程師', edu: '大專以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '36000~50000',
    job_type: '設備工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '客服工程師', edu: '大專以上畢業', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '36000~50000',
    job_type: '客服工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '生產線技術員', edu: '不拘', num: 3,
    company: '宜特科技股份有限公司', place: '新竹地區', salary: '27000~45000',
    job_type: '生產線技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '電子產品可靠度副工程師/工程師', edu: '大學以上畢業', num: 4,
    company: '德凱宜特股份有限公司', place: '新竹地區', salary: '33000~45000',
    job_type: '工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '車用電子可靠度副工程師/工程師', edu: '大學以上畢業', num: 4,
    company: '德凱宜特股份有限公司', place: '新竹地區', salary: '33000~50000',
    job_type: '工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '製程設備工程師', edu: '高中以上畢業', num: 5,
    company: '晶鼎磊晶科技股份有限公司', place: '新竹地區', salary: '35000以上',
    job_type: '製程設備工程師', place_type: '新竹', salary_type: '月薪'},
    {name: 'MIS 網路管理工程師', edu: '高中以上畢業', num: 5,
    company: '晶鼎磊晶科技股份有限公司', place: '新竹地區', salary: ' 30000以上',
    job_type: '網路管理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '電控配線工程師', edu: '高中以上畢業', num: 5,
    company: '晶鼎磊晶科技股份有限公司', place: '新竹地區', salary: '35000以上',
    job_type: '電控配線工程師', place_type: '新竹', salary_type: '月薪'},
    {name: 'QA 人員', edu: '高中以上畢業', num: 5,
    company: '晶鼎磊晶科技股份有限公司', place: '新竹地區', salary: ' 30000以上',
    job_type: 'QA 人員', place_type: '新竹', salary_type: '月薪'},
    {name: '生產技術員', edu: '不拘', num: 6,
    company: '昱嘉科技股份有限公司', place: '新竹地區', salary: '25250~35000',
    job_type: '生產技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '品保技術員', edu: '不拘', num: 6,
    company: '昱嘉科技股份有限公司', place: '新竹地區', salary: '25250~35000',
    job_type: '品保技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '研發技術員', edu: '不拘', num: 6,
    company: '昱嘉科技股份有限公司', place: '新竹地區', salary: '25250~35000',
    job_type: '研發技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '生產線技術員', edu: '高中以上畢業', num: 7,
    company: '索爾思光電股份有限公司', place: '新竹地區', salary: '28750~30750',
    job_type: '生產線技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '晶片製程_高級工程師', edu: '碩士以上畢業', num: 7,
    company: '索爾思光電股份有限公司', place: '新竹地區', salary: '40000~60000',
    job_type: '製程工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '封裝製程_高級工程師', edu: '碩士以上畢業', num: 7,
    company: '索爾思光電股份有限公司', place: '新竹地區', salary: '40000~60000',
    job_type: '製程工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '晶粒開發_設備工程師', edu: '大學以上畢業', num: 7,
    company: '索爾思光電股份有限公司', place: '新竹地區', salary: '32000~50000',
    job_type: '設備工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '封裝/測試/高速製程_設備副工程師/工程師', edu: '高中以上畢業', num: 7,
    company: '索爾思光電股份有限公司', place: '新竹地區', salary: '32000~50000',
    job_type: '設備工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '焊錫技術員', edu: '不拘', num: 8,
    company: '泰詠電子股份有限公司', place: '新竹地區', salary: '29500~45000',
    job_type: '焊錫技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '製造部技術員', edu: '不拘', num: 8,
    company: '泰詠電子股份有限公司', place: '新竹地區', salary: '29500~50000',
    job_type: '製造部技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '庶務行政管理師', edu: '不拘', num: 8,
    company: '泰詠電子股份有限公司', place: '新竹地區', salary: '32000~36000',
    job_type: '庶務行政管理師', place_type: '新竹', salary_type: '月薪'},
    {name: '業務管理師', edu: '不拘', num: 8,
    company: '泰詠電子股份有限公司', place: '新竹地區', salary: '38000~50000',
    job_type: '業務管理師', place_type: '新竹', salary_type: '月薪'},
    {name: '四班二輪製造部助理工程師(1D 廠)', edu: '大專以上畢業', num: 9,
    company: '台灣美日先進光罩股份有限公司', place: '新竹地區', salary: '25700~35700',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '四班二輪製造部助理工程師(1A 廠)', edu: '大專以上畢業', num: 9,
    company: '台灣美日先進光罩股份有限公司', place: '新竹地區', salary: '25700~35700',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '廠務工程師', edu: '大專以上畢業', num: 9,
    company: '台灣美日先進光罩股份有限公司', place: '新竹地區', salary: '40000以上',
    job_type: '廠務工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '客服副工程師', edu: '大專以上畢業', num: 9,
    company: '台灣美日先進光罩股份有限公司', place: '新竹地區', salary: '35000~38000',
    job_type: '客服工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '四二輪設備副工程師(1D廠)', edu: '大專以上畢業', num: 9,
    company: '台灣美日先進光罩股份有限公司', place: '新竹地區', salary: '38000 以上',
    job_type: '設備工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '四班二輪生管助理工程師(1A廠)', edu: '大專以上畢業', num: 9,
    company: '台灣美日先進光罩股份有限公司', place: '新竹地區', salary: '29000-35000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '四班二輪製程工程師(1A 廠)', edu: '大學以上畢業', num: 9,
    company: '台灣美日先進光罩股份有限公司', place: '新竹地區', salary: '40000以上',
    job_type: '製程工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '製造技術人員', edu: '不拘', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '31270~36000',
    job_type: '製造技術人員', place_type: '新竹', salary_type: '月薪'},
    {name: '洗瓶屑人員', edu: '不拘', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '31170~33780',
    job_type: '洗瓶屑人員', place_type: '新竹', salary_type: '月薪'},
    {name: '品管包裝員', edu: '不拘', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '25260 以上',
    job_type: '品管包裝員', place_type: '新竹', salary_type: '月薪'},
    {name: '品管包裝員-兼職', edu: '不拘', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '時薪 168 起',
    job_type: '品管包裝員', place_type: '新竹', salary_type: '時薪'},
    {name: '品保抽驗人員', edu: '不拘', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '25260 以上',
    job_type: '品保人員', place_type: '新竹', salary_type: '月薪'},
    {name: '品保量測人員', edu: '不拘', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '25260 以上',
    job_type: '品保人員', place_type: '新竹', salary_type: '月薪'},
    {name: '機械設備技術員', edu: '大學以上畢業', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '29170~35760',
    job_type: '技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '機電技術人員', edu: '大學以上畢業', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '30870~34860',
    job_type: '技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '堆高機操作員', edu: '不拘', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '28800 以上',
    job_type: '操作員', place_type: '新竹', salary_type: '月薪'},
    {name: '製造儲備幹部', edu: '高中以上畢業', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '29000 以上',
    job_type: '儲備幹部', place_type: '新竹', salary_type: '月薪'},
    {name: '品管儲備幹部', edu: '大專以上畢業', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '27000 以上',
    job_type: '儲備幹部', place_type: '新竹', salary_type: '月薪'},
    {name: '技術儲備幹部', edu: '高中以上畢業', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '29000 以上',
    job_type: '儲備幹部', place_type: '新竹', salary_type: '月薪'},
    {name: '倉儲儲備幹部', edu: '不拘', num: 10,
    company: '華夏玻璃股份有限公司', place: '新竹地區', salary: '28000 以上',
    job_type: '儲備幹部', place_type: '新竹', salary_type: '月薪'},
    {name: '產線技術員', edu: '不拘', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: ' 33300 以上',
    job_type: '技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '產線助理', edu: '不拘', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '27300 以上',
    job_type: '助理', place_type: '新竹', salary_type: '月薪'},
    {name: '成品庫房技術員', edu: '不拘', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '27300 以上',
    job_type: '技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '排程技術員', edu: '不拘', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '27300 以上',
    job_type: '技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '品管技術員(QC) ', edu: '不拘', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '27300 以上',
    job_type: '技術員', place_type: '新竹', salary_type: '月薪'},
    {name: '設備工程師', edu: '大學以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '設備工程師', place_type: '新竹', salary_type: '面議'},
    {name: '廠務工程師', edu: '大專以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '27300~50000 ',
    job_type: '廠務工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '量產整合高級工程師', edu: '碩士以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '工程師', place_type: '新竹', salary_type: '面議'},
    {name: '量產整合工程師', edu: '大學以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '工程師', place_type: '新竹', salary_type: '面議'},
    {name: '測試工程師', edu: '大學以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '測試工程師', place_type: '新竹', salary_type: '面議'},
    {name: '薄膜製程工程師', edu: '大學以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '製程工程師', place_type: '新竹', salary_type: '面議'},
    {name: '微影製程工程師', edu: '大學以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '製程工程師', place_type: '新竹', salary_type: '面議'},
    {name: '微波暨功率元件_磊晶研發工程師', edu: '碩士以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '研發工程師', place_type: '新竹', salary_type: '面議'},
    {name: '微波暨功率元件_製程研發工程師', edu: '碩士以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '研發工程師', place_type: '新竹', salary_type: '面議'},
    {name: '光電元件_產品開發工程師', edu: '碩士以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '開發工程師', place_type: '新竹', salary_type: '面議'},
    {name: '光電元件_製程研發工程師', edu: '碩士以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '開發工程師', place_type: '新竹', salary_type: '面議'},
    {name: '光電元件_研發助理工程師', edu: '不拘', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '25250~44000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '採購高級工程師', edu: '大學以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '工程師', place_type: '新竹', salary_type: '面議'},
    {name: '普會高級管理師', edu: '大學以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '管理師', place_type: '新竹', salary_type: '面議'},
    {name: '成會高級管理師', edu: '大學以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '管理師', place_type: '新竹', salary_type: '面議'},
    {name: '智慧製造自動化工程師', edu: '大學以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '工程師', place_type: '新竹', salary_type: '面議'},
    {name: 'Layout 工程師', edu: '大學以上畢業', num: 11,
    company: '晶成半導體股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '工程師', place_type: '新竹', salary_type: '面議'},
    {name: '軟體工程師', edu: '不拘', num: 12,
    company: '宇辰系統科技股份有限公司', place: '新竹地區', salary: '32000~50000',
    job_type: '軟體工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '圖控/PLC工程師', edu: '不拘', num: 12,
    company: '宇辰系統科技股份有限公司', place: '新竹/台中/台南', salary: '32000~50000',
    job_type: '工程師', place_type: '新竹, 台中, 台南', salary_type: '月薪'},
    {name: '圖控/PLC主管', edu: '不拘', num: 12,
    company: '宇辰系統科技股份有限公司', place: '新竹地區/台中市/台南市', salary: '50000~100000',
    job_type: '主管', place_type: '新竹, 台中, 台南', salary_type: '月薪'},
    {name: '專案管理師', edu: '不拘', num: 12,
    company: '宇辰系統科技股份有限公司', place: '新竹地區', salary: '32000~50000',
    job_type: '管理師', place_type: '新竹', salary_type: '月薪'},
    {name: '監造工程師', edu: '不拘', num: 12,
    company: '宇辰系統科技股份有限公司', place: '新竹地區/台中市/台南市', salary: '32000~50000',
    job_type: '工程師', place_type: '新竹, 台中, 台南', salary_type: '月薪'},
    {name: '業務人員', edu: '不拘', num: 12,
    company: '宇辰系統科技股份有限公司', place: '新竹地區', salary: '32000~50000',
    job_type: '業務人員', place_type: '新竹', salary_type: '月薪'},
    {name: '主管秘書', edu: '不拘', num: 12,
    company: '宇辰系統科技股份有限公司', place: '新竹地區', salary: '32000~50000',
    job_type: '秘書', place_type: '新竹', salary_type: '月薪'},
    {name: '工安工程師', edu: '不拘', num: 12,
    company: '宇辰系統科技股份有限公司', place: '新竹地區', salary: '32000~50000',
    job_type: '工程師', place_type: '新竹', salary_type: '月薪'},
    {name: 'OQC 助理工程師', edu: '不拘', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: '28000~31000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: 'IQC 助理工程師', edu: '不拘', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: '28000~31000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: 'ProbeCard 測試助理工程師', edu: '不拘', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: '28000~31000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '探針卡助理工程師(技術員)', edu: '不拘', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: '25250~30000 ',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '研發機構工程師', edu: '大學以上畢業', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: '34000~40000 ',
    job_type: '研發工程師', place_type: '新竹', salary_type: '月薪'},
    {name: 'Layout 助理工程師', edu: '不拘', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: '28000~32000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '彎針助理工程師(技術員)', edu: '不拘', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: '25250~30000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '調針助理工程師(技術員)', edu: '不拘', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: '25250~30000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '擺針助理工程師(技術員)', edu: '不拘', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: '25250~30000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '焊錫助理工程師(技術員)', edu: '不拘', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: '25250~30000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '產品應用工程師', edu: '大學以上畢業', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: '30000~42000',
    job_type: '工程師', place_type: '新竹', salary_type: '月薪'},
    {name: 'FAE 應用工程師(客服)', edu: '不拘', num: 13,
    company: '勵威電子股份有限公司 ', place: '新竹地區', salary: ' 40000以上',
    job_type: '工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '機電助理工程師', edu: '不拘', num: 14,
    company: '震江電力科技股份有限公司', place: '新竹地區/台南市', salary: '31000以上',
    job_type: '工程師', place_type: '新竹, 台南', salary_type: '月薪'},
    {name: '機電工程師', edu: '大學以上畢業', num: 14,
    company: '震江電力科技股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '工程師', place_type: '新竹', salary_type: '面議'},
    {name: '機電實習生', edu: '高中以上畢業', num: 14,
    company: '震江電力科技股份有限公司', place: '新竹地區', salary: '27800~29400',
    job_type: '實習生', place_type: '新竹', salary_type: '月薪'},
    {name: '監工助理工程師', edu: '不拘', num: 14,
    company: '震江電力科技股份有限公司', place: '新竹地區', salary: ' 30000~37000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '市場行銷專員', edu: '大學以上畢業', num: 14,
    company: '震江電力科技股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '行銷專員', place_type: '新竹', salary_type: '面議'},
    {name: '軟體工程師', edu: '大學以上畢業', num: 14,
    company: '震江電力科技股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '軟體工程師', place_type: '新竹', salary_type: '面議'},
    {name: '產品經理/專案經理', edu: '大學以上畢業', num: 14,
    company: '震江電力科技股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '專案經理', place_type: '新竹', salary_type: '面議'},
    {name: '職業安全衛生管理員', edu: '不拘', num: 14,
    company: '震江電力科技股份有限公司', place: '新竹地區', salary: '33000~40000',
    job_type: '管理員', place_type: '新竹', salary_type: '月薪'},
    {name: '韌體工程師 ', edu: '大學以上畢業', num: 14,
    company: '震江電力科技股份有限公司', place: '新竹地區', salary: '面議',
    job_type: '韌體工程師 ', place_type: '新竹', salary_type: '面議'},
    {name: 'QA 測試工程師', edu: '大專以上畢業', num: 14,
    company: '震江電力科技股份有限公司', place: '新竹地區', salary: '35000~50000',
    job_type: '工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '監造工程師', edu: '不拘', num: 15,
    company: '銳澤實業股份有限公司', place: '新北市/新竹地區/台中市/台南市/高雄市', salary: '38000以上',
    job_type: '工程師', place_type: '新北, 新竹, 台中, 台南, 高雄', salary_type: '月薪'},
    {name: '工安工程師', edu: '不拘', num: 15,
    company: '銳澤實業股份有限公司', place: '新北市/新竹地區/台中市/台南市/高雄市', salary: '38000以上',
    job_type: '工程師', place_type: '新北, 新竹, 台中, 台南, 高雄', salary_type: '月薪'},
    {name: '品保工程師', edu: '不拘', num: 15,
    company: '銳澤實業股份有限公司', place: '新北市/新竹地區/台中市/台南市/高雄市', salary: '38000以上',
    job_type: '品保工程師', place_type: '新北, 新竹, 台中, 台南, 高雄', salary_type: '月薪'},
    {name: '繪圖工程師', edu: '不拘', num: 15,
    company: '銳澤實業股份有限公司', place: '新竹地區/苗栗縣', salary: '38000以上',
    job_type: '工程師', place_type: '新竹, 苗栗', salary_type: '月薪'},
    {name: '資材專員', edu: '不拘', num: 15,
    company: '銳澤實業股份有限公司', place: '新北市/新竹地區/高雄市', salary: '32500以上',
    job_type: '資材專員', place_type: '新北, 新竹, 高雄', salary_type: '月薪'},
    {name: '客服外勤工程師', edu: '不拘', num: 16,
    company: '專加系統科技股份有限公司', place: '新竹地區', salary: '28000~38000',
    job_type: '工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '機電/空調工程師(新竹)', edu: '大專以上畢業', num: 17,
    company: '洋基工程股份有限公司 ', place: '新竹地區', salary: '35000~50000',
    job_type: '工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '設計工程師(新竹)', edu: '大專以上畢業', num: 17,
    company: '洋基工程股份有限公司 ', place: '新竹地區', salary: '35000~50000',
    job_type: '設計工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '機電/空調工程師(苗栗)', edu: '大專以上畢業', num: 17,
    company: '洋基工程股份有限公司 ', place: '苗栗縣', salary: '35000~50000',
    job_type: '工程師', place_type: '苗栗', salary_type: '月薪'},
    {name: '設計工程師(苗栗)', edu: '大專以上畢業', num: 17,
    company: '洋基工程股份有限公司 ', place: '苗栗縣', salary: '35000~50000',
    job_type: '設計工程師', place_type: '苗栗', salary_type: '月薪'},
    {name: '設備助理工程師', edu: '不拘', num: 18,
    company: '香港商達思系統股份有限公司台灣分公司', place: '新竹地區', salary: '34000~45000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '設備助理工程師', edu: '不拘', num: 18,
    company: '香港商達思系統股份有限公司台灣分公司', place: '台中市', salary: '34000~45000',
    job_type: '助理工程師', place_type: '台中', salary_type: '月薪'},
    {name: '設備助理工程師', edu: '不拘', num: 18,
    company: '香港商達思系統股份有限公司台灣分公司', place: '新北市', salary: '34000~45000',
    job_type: '助理工程師', place_type: '新北', salary_type: '月薪'},
    {name: '製造助理工程師', edu: '高中以上畢業', num: 19,
    company: '普生股份有限公司 ', place: '新竹地區', salary: '30000~38000',
    job_type: '助理工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '品保專案工程師 ', edu: '高中以上畢業', num: 19,
    company: '普生股份有限公司 ', place: '新竹地區', salary: '38000 以上',
    job_type: '品保工程師', place_type: '新竹', salary_type: '月薪'},
    {name: '倉儲管理師_oh care 事業群', edu: '不拘', num: 19,
    company: '普生股份有限公司 ', place: '新竹地區', salary: '30000~35000',
    job_type: '管理師', place_type: '新竹', salary_type: '月薪'},
    {name: '【約聘職】會計人員', edu: '不拘', num: 19,
    company: '普生股份有限公司 ', place: '新竹地區', salary: '36000~40000',
    job_type: '會計人員', place_type: '新竹', salary_type: '月薪'},
    {name: '光電儲能設備系統業務', edu: '不拘', num: 20,
    company: '分子微量科技股份有限公司 ', place: '新竹地區', salary: '32000~80000',
    job_type: '業務', place_type: '新竹', salary_type: '月薪'},
    {name: '維運機電工程人員/工程師', edu: '不拘', num: 20,
    company: '分子微量科技股份有限公司 ', place: '新竹地區', salary: '面議',
    job_type: '工程師', place_type: '新竹', salary_type: '面議'},
    {name: '新竹科學園區 固定日/夜班保全員', edu: '高中以上畢業', num: 21,
    company: '莒光保全股份有限公司', place: '新竹地區', salary: '38000~42000',
    job_type: '保全員', place_type: '新竹', salary_type: '月薪'},
    {name: '聯電-資安門禁安檢員', edu: '高中以上畢業', num: 21,
    company: '莒光保全股份有限公司', place: '新竹地區', salary: '33000~38000',
    job_type: '安檢員', place_type: '新竹', salary_type: '月薪'},
    {name: '台積電-資安門禁安檢員', edu: '高中以上畢業', num: 21,
    company: '莒光保全股份有限公司', place: '新竹地區', salary: '42000~45000',
    job_type: '安檢員', place_type: '新竹', salary_type: '月薪'},
    {name: '台積電-保全員', edu: '高中以上畢業', num: 21,
    company: '莒光保全股份有限公司', place: '新竹地區', salary: '42000~45000',
    job_type: '保全員', place_type: '新竹', salary_type: '月薪'},
    {name: '台積電晶元廠 總機櫃台人員', edu: '高中以上畢業', num: 21,
    company: '莒光保全股份有限公司', place: '新竹地區', salary: '42000~45000',
    job_type: '櫃檯人員', place_type: '新竹', salary_type: '月薪'},
    {name: '忠孝大潤發銷售專員', edu: '高中以上畢業', num: 22,
    company: '三井資訊股份有限公司 ', place: '新竹地區', salary: '35000以上',
    job_type: '銷售', place_type: '新竹', salary_type: '月薪'},
    {name: '竹北家樂福銷售專員', edu: '高中以上畢業', num: 22,
    company: '三井資訊股份有限公司 ', place: '新竹地區', salary: '33000以上',
    job_type: '銷售', place_type: '新竹', salary_type: '月薪'},
    {name: '羅技巨城銷售專員', edu: '高中以上畢業', num: 22,
    company: '三井資訊股份有限公司 ', place: '新竹地區', salary: '32000以上',
    job_type: '銷售', place_type: '新竹', salary_type: '月薪'},
    {name: '筆電銷售專員 ', edu: '高中以上畢業', num: 22,
    company: '三井資訊股份有限公司 ', place: '新竹地區', salary: '29000以上',
    job_type: '銷售', place_type: '新竹', salary_type: '月薪'},
    {name: '正職 ', edu: '不拘', num: 23,
    company: '小蒙牛股份有限公司', place: '新竹地區', salary: '28979~34461',
    job_type: '外場', place_type: '新竹', salary_type: '月薪'},
    {name: '部分工時', edu: '不拘', num: 23,
    company: '小蒙牛股份有限公司', place: '新竹地區', salary: '時薪168~210',
    job_type: '外場', place_type: '新竹', salary_type: '時薪'},
    {name: '業務司機', edu: '不拘', num: 24,
    company: '光泉食品股份有限公司光泉牧場股份有限公司', place: '新竹地區', salary: ' 30000以上',
    job_type: '司機', place_type: '新竹', salary_type: '月薪'},
    {name: '商務通路開發專案主任(新竹駐區)', edu: '不拘', num: 24,
    company: '光泉食品股份有限公司光泉牧場股份有限公司', place: '新竹地區', salary: ' 32000以上',
    job_type: '市場開發', place_type: '新竹', salary_type: '月薪'},
    {name: '庫務專員', edu: '不拘', num: 24,
    company: '光泉食品股份有限公司光泉牧場股份有限公司', place: '新竹地區', salary: '27000~33000',
    job_type: '庫務專員', place_type: '新竹', salary_type: '月薪'},
    {name: '引貨業務專員', edu: '不拘', num: 24,
    company: '光泉食品股份有限公司光泉牧場股份有限公司', place: '新竹地區', salary: ' 30000以上',
    job_type: '業務', place_type: '新竹', salary_type: '月薪'},
    {name: '人資管理師', edu: '大學以上畢業', num: 24,
    company: '光泉食品股份有限公司光泉牧場股份有限公司', place: '桃園市', salary: ' 33000~36000 ',
    job_type: '人資', place_type: '桃園', salary_type: '月薪'},
    {name: '品管人員', edu: '高中以上畢業', num: 24,
    company: '光泉食品股份有限公司光泉牧場股份有限公司', place: '桃園市', salary: '30000~35000',
    job_type: '品管', place_type: '桃園', salary_type: '月薪'},
    {name: '設備維修工程師', edu: '不拘', num: 24,
    company: '光泉食品股份有限公司光泉牧場股份有限公司', place: '桃園市', salary: ' 38000以上',
    job_type: '工程師', place_type: '桃園', salary_type: '月薪'},
    {name: '儲備幹部', edu: '不拘', num: 25,
    company: '樂檸鮮事股份有限公司', place: '新竹地區', salary: '34000',
    job_type: '儲備幹部 ', place_type: '新竹', salary_type: '月薪'},
    {name: '【牛角燒肉 / 温野菜火鍋】早班/晚班 固定正職人員', edu: '不拘', num: 26,
    company: '東京牛角股份有限公司', place: '新竹地區', salary: '32000~34000',
    job_type: '內場', place_type: '新竹', salary_type: '月薪'},
    {name: '【牛角燒肉 / 温野菜火鍋】─ 大台北地區內外場儲備幹部 ', edu: '大專以上畢業', num: 26,
    company: '東京牛角股份有限公司', place: '台北市', salary: '36000~40000',
    job_type: '儲備幹部 ', place_type: '台北', salary_type: '月薪'},
    {name: '【牛角/温野菜】早、晚班兼職夥伴', edu: '不拘', num: 26,
    company: '東京牛角股份有限公司', place: '新竹地區', salary: '時薪185~200',
    job_type: '內場', place_type: '新竹', salary_type: '時薪'},
    {name: '內/外場兼職人員', edu: '不拘', num: 27,
    company: '王座國際餐飲(杏子豬排/京都勝牛)', place: '新竹地區', salary: '時薪183~193',
    job_type: '內場', place_type: '新竹', salary_type: '時薪'},
    {name: '儲備幹部', edu: '不拘', num: 27,
    company: '王座國際餐飲(杏子豬排/京都勝牛)', place: '新竹地區', salary: '31000~34000',
    job_type: '儲備幹部 ', place_type: '新竹', salary_type: '月薪'},
    {name: '幹部/組長', edu: '不拘', num: 27,
    company: '王座國際餐飲(杏子豬排/京都勝牛)', place: '新竹地區', salary: '34000~39500',
    job_type: '幹部 ', place_type: '新竹', salary_type: '月薪'},
    {name: '儲備店長', edu: '不拘', num: 27,
    company: '王座國際餐飲(杏子豬排/京都勝牛)', place: '新竹地區', salary: '42000~52000',
    job_type: '儲備幹部 ', place_type: '新竹', salary_type: '月薪'},
    {name: '正職人員', edu: '不拘', num: 28,
    company: '好食國際投資股份有限公司客美多新竹分公司', place: '新竹地區', salary: '30000~33000',
    job_type: '內場', place_type: '新竹', salary_type: '月薪'},
    {name: '計時人員', edu: '不拘', num: 28,
    company: '好食國際投資股份有限公司客美多新竹分公司', place: '新竹地區', salary: '時薪180~185',
    job_type: '內場', place_type: '新竹', salary_type: '時薪'},
    {name: '門市儲備店經理', edu: '高中以上畢業', num: 29,
    company: '荃鴻股份有限公司', place: '新竹地區', salary: '32300以上',
    job_type: '儲備幹部 ', place_type: '新竹', salary_type: '月薪'},
    {name: '門市儲備店幹部', edu: '高中以上畢業', num: 29,
    company: '荃鴻股份有限公司', place: '新竹地區', salary: '27500以上',
    job_type: '儲備幹部 ', place_type: '新竹', salary_type: '月薪'},
    {name: '時薪人員', edu: '高中以上畢業', num: 29,
    company: '荃鴻股份有限公司', place: '新竹地區', salary: '時薪168',
    job_type: '銷售', place_type: '新竹', salary_type: '時薪'},
    {name: '早班外場正職', edu: '不拘', num: 30,
    company: '錢都國際餐飲有限公司 ', place: '新竹地區', salary: '30000~35000',
    job_type: '外場', place_type: '新竹', salary_type: '月薪'},
    {name: '早班內場正職', edu: '不拘', num: 30,
    company: '錢都國際餐飲有限公司 ', place: '新竹地區', salary: '30000~35000',
    job_type: '內場', place_type: '新竹', salary_type: '月薪'},
    {name: '晚班外場正職', edu: '不拘', num: 30,
    company: '錢都國際餐飲有限公司 ', place: '新竹地區', salary: '35000~40000',
    job_type: '外場', place_type: '新竹', salary_type: '月薪'},
    {name: '晚班內場正職', edu: '不拘', num: 30,
    company: '錢都國際餐飲有限公司 ', place: '新竹地區', salary: '35000~40000',
    job_type: '內場', place_type: '新竹', salary_type: '月薪'},
    {name: '早外 PT ', edu: '不拘', num: 30,
    company: '錢都國際餐飲有限公司 ', place: '新竹地區', salary: '時薪180',
    job_type: '外場', place_type: '新竹', salary_type: '時薪'},
    {name: '早內 PT ', edu: '不拘', num: 30,
    company: '錢都國際餐飲有限公司 ', place: '新竹地區', salary: '時薪180',
    job_type: '內場', place_type: '新竹', salary_type: '時薪'},
    {name: '晚外 PT ', edu: '不拘', num: 30,
    company: '錢都國際餐飲有限公司 ', place: '新竹地區', salary: '時薪180',
    job_type: '外場', place_type: '新竹', salary_type: '時薪'},
    {name: '晚內 PT ', edu: '不拘', num: 30,
    company: '錢都國際餐飲有限公司 ', place: '新竹地區', salary: '時薪180',
    job_type: '內場', place_type: '新竹', salary_type: '時薪'},
];

export default JobsPage;