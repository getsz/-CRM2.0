import * as React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon,Tabs  } from 'antd';
import  './index.css';
import imgURL from './img/icon1.png';
import imgURL2 from './img/icon2.png';
import laba from './img/laba.png';
import qizi from './img/qizi.png';
import xiangxi from './img/xiangxi.png';
import liuyan from './img/liuyan.png';
import axios from 'axios';
 
import Page from "../../ui/page/UIPage";
import SearchBarComponent from "../../components/searchbar/SearchBarComponent";
import ContentComponent from "../../components/content/ContentComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import { connect } from "react-redux";
import * as itemsActions from "../../reducers/items/itemsAction";
import * as filterAction from "../../reducers/filter/filterAction";
import { bindActionCreators } from "redux";
//import Select from 'react-select';
 
//下拉框
const defineArr = [{name: '小明', things: ['小明的笔','小明的纸','小明的画']},{name: '小黑', things: ['小黑的笔','小黑的纸','小黑的画']},{name: '小黄', things: ['小黄的笔','小黄的纸','小黄的画']},{name: '小花', things: ['小花的笔','小花的纸','小花的画']}];


//import lkLog from "lk-log";
//const logger = lkLog.getLogger("MainContainer");

//import httpRequest from "lk-http-request";

import "./main-container.less";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
 // const url2='http://127.0.0.1:8080/jg/lpage/lmsp/lbpm/PAInsDetail?l_fragment=1&insId='
   const url2='http://192.168.2.86:8380/jg/lpage/lmsp/lbpm/PAInsDetail?l_fragment=1&insId='

const TabPane = Tabs.TabPane;
function callback(key) {
  //console.log(key);
}

 
class Main extends React.Component {
   
  static defaultProps = {
    items: [],
    filter: "",
    actions: {}
}
  constructor(props) {

    super(props);

   

    this.state = {

      posts: String,
       post2: [],
      post3:Array,
      dbsydata: [],
      selectchance:[],
      member:[],
      addchance:{chance:'11',custname:'22',chancename:'33',type:'44'},
      custname:'',
      chancename:'',
      yewujh:'',
      kehumc:'',
      jihuimc:'',
      yewulx:'',
      faqixt:'',
      youxiancd:'',
      jiezhirq:'',
      kehulxr:'',
      lianxifs:'',
      yujizjgm:'',
      ywlx:[],
      yxcd:[],
    } 
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

 
 
      
  //   componentDidMount() {
  //  //   axios.post('http://127.0.0.1:8080/jg/lpageconn/xtwork.SelectOrgListBo','{}')
  // invoke('SelectOrgListBo',null,function(res){
  //          res => {  
  //           const posts = res.data ;
  //           console.log(posts)
  //           this.setState({ posts });
  //          }
  //        });
     
  //   }
  componentDidMount() {
    // axios.post('http://127.0.0.1:8080/jg/lpageconn/','{}')
    // .then(res => {

    //   const posts = res.data.data.children.map(obj => obj.data);

    //   this.setState({ posts });

    // });
    //待办接口调用
    var dbsy={};
    dbsy.busiNo='xtwork.ReactDBSYBo';
    dbsy.param='{}';
    dbsy.l_sign=null;
    axios({
      method: 'post',
     // url: 'http://127.0.0.1:8080/jg/lpageconn/',
      url: 'http://192.168.2.86:8380/jg/lpageconn/',
      params: dbsy
    }).then(res => {
      const dbsydata = res.data.data; 
        this.setState({ dbsydata });
      });
    //

    //右侧人员接口调用
    var member={};
    member.busiNo='xtwork.ReactMemberBo';
    member.param='{}';
    member.l_sign=null;
    axios({
      method: 'post',
     // url: 'http://127.0.0.1:8080/jg/lpageconn/',
      url: 'http://192.168.2.86:8380/jg/lpageconn/',
      params: member
    }).then(res => {
      const member = res.data; 
        this.setState({ member });
      });

         //第二页列表接口调用
    var selectchance={};
    selectchance.busiNo='xtwork.ReactSelectChanceBo';
    selectchance.param='{}';
    selectchance.l_sign=null;
    axios({
      method: 'post',
      // url: 'http://127.0.0.1:8080/jg/lpageconn/',
       url: 'http://192.168.2.86:8380/jg/lpageconn/',
      params: selectchance
    }).then(res => {
      const selectchance = res.data.data; 
        this.setState({ selectchance });
      });

         //第二页业务类型select接口调用
    var ywlx={};
    ywlx.busiNo='xtwork.ReactSelectChanceYwlxBo';
    ywlx.param='{}';
    ywlx.l_sign=null;
    axios({
      method: 'post',
     //  url: 'http://127.0.0.1:8080/jg/lpageconn/',
       url: 'http://192.168.2.86:8380/jg/lpageconn/',
      params: ywlx
    }).then(res => {
      const ywlx = res.data.data; 
        this.setState({ ywlx });
      });
      //第二页优先程度select接口调用
      var yxcd={};
      yxcd.busiNo='xtwork.ReactSelectChanceYxcdBo';
      yxcd.param='{}';
      yxcd.l_sign=null;
      axios({
        method: 'post',
        // url: 'http://127.0.0.1:8080/jg/lpageconn/',
         url: 'http://192.168.2.86:8380/jg/lpageconn/',
        params: yxcd
      }).then(res => {
        const yxcd = res.data.data; 
          this.setState({ yxcd });
        });
  
    //
 






    var p={};
    p.busiNo= 'xtwork.SelectOrgListBo';
    p.param='{}';
    p.l_sign=null;
    axios({
      method: 'post',
       //url: 'http://127.0.0.1:8080/jg/lpageconn/',
       url: 'http://192.168.2.86:8380/jg/lpageconn/',
      params: p
    }).then(res => {
        
      const posts = res.data.totalCount;
     // console.log(posts); 
      const post2 = res.data.data; 
      this.setState({post2})
        this.setState({ posts });
    
      
for(var index in post2) {
  //  console.log(index ,":", post2[index]);
  //  console.log(index ,":", post2[index].name);
}
      });
    }
    ///////// Ajax.post('http://127.0.0.1:8080/jg/lpageconn/','{xtwork.SelectOrgListBo}',function(res){
    // ////////  console.log(res)
    /////////// })

    
  //}
  
    componentWillUnmount() {
      
      //  console.log("third page willunmount");
    }
    
    //onchange名称
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }


// //下拉框
//     changeName(e) {
//       this.setState({ selectName: e.target.value });
//       defineArr.map((item, index) => {
//         if(e.target.value === item.name) {
//           this.setState({ selectThing: item.things[0] });
//         }
//         return true;
//       })
//     };



//提交触发按钮
    handleChange (event) {
       
     // this.setState({value: '菜鸟教程'});
        //tab2页面保存接口调用
      
   var addchancef={};
   addchancef.busiNo='xtwork.ReactAddChanceBo';
   addchancef.param= this.state;
   addchancef.l_sign=null;
   axios({
     method: 'post',
     // url: 'http://127.0.0.1:8080/jg/lpageconn/',
      url: 'http://192.168.2.86:8380/jg/lpageconn/',
     params: addchancef
   }) ;
   alert("业务机会提交成功！");
//清空表单项目
this.setState({yewujh:''})  
this.setState({kehumc:''})
this.setState({jihuimc:''})
this.setState({yewulx:''})
this.setState({faqixt:''})
this.setState({youxiancd:''})
this.setState({jiezhirq:''})  
this.setState({kehulxr:''})  
this.setState({lianxifs:''})  
this.setState({yujizjgm:''})  

    }
//提交触发流程按钮
handleChange2 (event) {
       
  // this.setState({value: '菜鸟教程'});
     //tab2页面保存接口调用
   
var addchancelc={};
addchancelc.busiNo='xtwork.ReactAddChanceLCBo';
addchancelc.param= this.state;
addchancelc.l_sign=null;
axios({
  method: 'post',
   // url: 'http://127.0.0.1:8080/jg/lpageconn/',
    url: 'http://192.168.2.86:8380/jg/lpageconn/',
  params: addchancelc
}) ;
alert("业务机会审核流程发起成功！");
//清空表单项目
this.setState({yewujh:''})  
this.setState({kehumc:''})
this.setState({jihuimc:''})
this.setState({yewulx:''})
this.setState({faqixt:''})
this.setState({youxiancd:''})
this.setState({jiezhirq:''})  
this.setState({kehulxr:''})  
this.setState({lianxifs:''})  
this.setState({yujizjgm:''})  

 }


    render() {
     
      var numbers = [1,2,3,4,5,6,7,8,9]; //测试
      var students =this.state.post2;//测试
      var dbsydatalist =this.state.dbsydata;//待办事宜数据列
      var member=this.state.member;//右侧人员信息数据
      var selectchance = this.state.selectchance;//第二页机会下部分数据列
       var ywlx = this.state.ywlx;//第二页业务类型select选择框
   
          const ywlxss = ywlx.map((item, index) => {
            return <option value={item.ywlxid}>{item.ywlxname}</option>
          });
      var yxcd = this.state.yxcd;//第二页优先程度select选择框
   
          const yxcdss = yxcd.map((item, index) => {
            return <option value={item.yxcdid}>{item.yxcdname}</option>
          });
 

     
        return (
            <div className="ui-page">
                <div style={{width :'70%',height:'100%', float:'left',border:'1px solid #ccc',borderRadius: '5px' ,marginLeft:'15px',marginTop:'15px',background:'#FFFFFF'}}>
{/* 菜单div */}<div class='page1menu' style={{borderRadius: '5px 5px 0px 0px',border:'1px solid #ccc' }}>
             <Tabs type="card" defaultActiveKey="1"  onChange={callback}>
  {/* TAB1---------------------------------- TAB1--------------------------------TAB1  */}
    <TabPane tab="待办事宜" key="1" >
{/*列表div*/}<div style={{padding:'15px 15px'}}>  
    <ul>  
                    {  
           dbsydatalist.map(function(v){  
            return <div>
              
               <p>发布于{v.fbrq}</p>
          <div style={{border:'1px solid #ccc',borderRadius:'5px',padding:'15px 15px',background:'#F5F5F5'}}>
              <h3  style={{fontWeight:'bold'}}>{v.fqr}：{v.lcname}</h3>
{/*橙色div*/}<div style={{height:'55px', background:'#FFF8DB', border:'1px solid #FADD9B',borderRadius:'5px',padding:'15px 15px'}}>
            <div style={{width:'70%',float:'left'}}>
            
            <font style={{color:'#ADADAD'}}>最新跟踪记录：{v.gxrq} {v.gxr}</font><font style={{fontWeight:'bold'}}>{v.lcjd}</font>  
            </div>
            <div style={{width:'30%',float:'right'}}>
            <a href={url2+v.lcid}><font style={{color:'#F7986B'}}>详细跟踪记录</font> </a>
            </div>
                        </div>
            <div style={{ padding:'15px 0px 5px 0px',height:'33px'}}>
            <a href={url2+v.lcid}> <input value='查看' type='button'  style={{ border:'none', height:'28px', borderRadius:'5px',width:'70px', float:'right',background:'#1F93FF',color:'#fff'}}/></a>
            </div>
            </div>
            </div>
             
        })             
  }  
  </ul> 
    
{/*列表divEND*/}</div>

    </TabPane>
      {/* TAB2--------------------------------- TAB2--------------------------------TAB2 */}
    <TabPane tab="业务机会" key="2">
    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
    <form>
      <table style={{width: '100%'}}>
        <tr>
          <td>
            <table style={{width: '100%'}}>
              <tr>
                <td colspan='6'> 
                    <textarea value={this.state.yewujh}   onChange={this.handleInputChange} name='yewujh' style={{resize: 'none',width: '100%',border: '1px solid #ccc',padding: '20px 4px', borderRadius: '5px'}}>今天和银联老总</textarea> 
                </td>
              </tr>
              <tr>
              <td style={{   padding: '10px 0px   10px 0px'}}>
                 客户名称
                </td>
                <td style={{width:'24%'}}>
                {/*     display: 'block',width: '70%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px' */}
                  <input  value={this.state.kehumc}  type='text' name='kehumc' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}   onChange={this.handleInputChange}></input>
                </td>
                <td  style={{   padding: '10px 0px   10px 0px'}}>
                  机会名称
                </td>
                <td style={{width:'24%'}}>
                <input value={this.state.jihuimc}  name ='jihuimc' type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}   onChange={this.handleInputChange} ></input>
                </td>
                <td style={{   padding: '10px 0px   10px 0px'}}>
                  业务类型
                </td>
                <td style={{width:'24%'}}>
                {/* <input name='yewulx'  onChange={this.handleInputChange} type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
                </td> */}
                
              <select value={this.state.yewulx} name='yewulx'   onChange={this.handleInputChange} style={{width:'80%'}}>{ywlxss}</select>
        
</td>
              </tr>
              <tr>
              <td style={{   padding: '10px 0px   10px 0px'}}>
                 发起协同 
                </td>
                <td style={{width:'24%'}}>
                <input  value={this.state.faqixt} name='faqixt'  onChange={this.handleInputChange} type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
              </td>
                <td style={{   padding: '10px 0px   10px 0px'}}>
                  优先程度
                </td>
                <td style={{width:'24%'}}>
                {/* <input name='youxiancd'  onChange={this.handleInputChange} type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input> */}
              
                <select  value={this.state.youxiancd}  name='youxiancd'   onChange={this.handleInputChange} style={{width:'80%'}}>{yxcdss}</select>
        
                </td>
                <td style={{   padding: '10px 0px   10px 0px'}}>
                  截止日期
                </td>
                <td style={{width:'24%'}}>
                <input value={this.state.jiezhirq}  name='jiezhirq'  onChange={this.handleInputChange} type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
                </td>
              </tr>
              <tr>
              <td style={{  padding: '10px 0px   10px 0px'}}>
                 客户联系人 
                </td>
                <td style={{width:'24%'}}>
                <input value={this.state.kehulxr}  name='kehulxr'  onChange={this.handleInputChange} type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
               </td>
                <td style={{  padding: '10px 0px   10px 0px'}}>
                  联系方式
                </td>
                <td style={{width:'24%'}}>
                <input value={this.state.lianxifs}  name='lianxifs'  onChange={this.handleInputChange} type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
                </td>
                <td style={{   padding: '10px 0px   10px 0px'}}>
                  预计资金规模
                </td>
                <td style={{width:'24%'}}>
                <input value={this.state.yujizjgm}  name='yujizjgm'  onChange={this.handleInputChange} type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
                </td>
              </tr>
              <tr>
              <td  colspan='6' style={{  padding: '10px 0px   10px 0px'}}>
                <button   type="button"   style={{backgroundColor: '#1E90ff', color:'#fff',border: '1px solid #ccc', borderRadius: '5px'}} onClick={this.handleChange}>提交</button>
                &nbsp;  &nbsp;
                <button type="button" style={{backgroundColor: '#1E90ff', color:'#fff',border: '1px solid #ccc',borderRadius: '5px'}} onClick={this.handleChange2} >提交并发起协同</button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <select>
  <option value="volvo">按照最新跟踪排序</option>
  <option value="saab">按照录入时间排序</option> 
            </select>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />全部 </label>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />对接中 </label>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />分配给我 </label>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />我提交的 </label>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />已结束的 </label>
          </td>
        </tr>
 
    </table>
    </form>

    {/*列表div*/}<div style={{padding:'15px,0px,0px,0px',marginTop:'15px'}}>  
    <ul>  
                    {  
           selectchance.map(function(v){  
            return <div  style={{position:'relative', border:'1px solid #ccc',borderRadius:'5px',padding:'15px 15px',background:'#F5F5F5',marginBottom:'30px'}}>
            <h2><font color="#FFA500" style={{fontWeight:'bold'}}>{v.kehumc}</font></h2>
           
            <table style={{width:'100%',  borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <tr>
              <td colspan='2' style={{padding: '5px 0px   20px 5px'}}>
                发布于 2018-03-01 18：24
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 5px'}}>
                发起人：<font style={{fontWeight:'bold'}}> {v.membername}</font>
              </td>
              <td style={{padding: '5px 0px   5px 5px'}}>
                预计资金：<font style={{fontWeight:'bold'}}>{v.yujizjgm}  </font>
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 5px'}}>
                业务类型：<font style={{fontWeight:'bold'}}>新三板上市</font>
              </td>
              <td style={{padding: '5px 0px   5px 5px'}}>
               截止日期：<font style={{fontWeight:'bold'}}>2018-03-03</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '5px 0px   5px 5px'}} >
                机会描述：<font style={{fontWeight:'bold'}}>{v.chance}</font>
              </td>
            </tr>
            </table>
 {/*橙色div*/}<div style={{height:'55px', background:'#FFF8DB', border:'2px solid #FADD9B',borderRadius:'5px',padding:'15px 35px 15px 35px'}}>
            <div style={{width:'70%',float:'left'}}>
            <font style={{color:'#ADADAD'}}>最新跟踪记录：{v.gxrq} {v.gxr}</font><font style={{fontWeight:'bold'}}>{v.lcjd}</font> 
            </div>
            <div style={{width:'30%',float:'right'}}>
            <font style={{color:'#F7986B'}}>详细跟踪记录</font>
            </div>
  {/*end橙色div*/}</div>
   {/*蓝色div*/}<div style={{height:'55px', background:'#E6F2FF', border:'2px solid #B4D6FF ',borderRadius:'5px',padding:'15px 15px',marginTop:'15px'}}>
              <table style={{width:'100%'}} >
                <tr style={{width:'100%'}}><td>对接部门：<font style={{fontWeight:'bold'}}> IPO业务部</font></td><td>对接人： <font style={{fontWeight:'bold'}}>张承做</font></td><td>分配人： <font style={{fontWeight:'bold'}}>李协同</font></td></tr>
                </table>
  {/*end蓝色div*/}</div>
 {/*灰色div*/} <div  style={{height:'55px', background:'#FAFAFA',padding:'15px 55px 15px 35px', marginTop:'10px',marginLeft:'-15px',marginRight:'-15px',marginBottom:'10px'}}>
              <table style={{width:'100%',marginLeft:'20px'}}>
                <tr><td>已对接：<font style={{fontWeight:'bold'}}>张承做（IPO业务部）</font></td><td>留言（1）</td></tr>
              </table>
  {/*end灰色div*/}</div>
   {/*白色div*/}<div style={{  background:'#FFFFFF', border:'1px solid #DBE0EB ',borderRadius:'5px',padding:'15px 15px',marginTop:'15px'}}>
   <table style={{width:'100%'}}>
                <tr><td>张承做（IPO业务部） 说：</td><td>2018-03-03 12：30</td></tr>
                <tr>
                    <td colspan='2'  style={{padding: '5px 0px   5px 0px'}}>
                      这个需求我之前也提了，但是好像没有继续做下去，我尽力做方案，但不保证成啊，哥
                    </td>
                  </tr>
                <tr>
                    <td colspan='2' style={{padding: '5px 15px   5px 0px'}}>
                    <hr style={{color:'#EFF1F4'}}/>
                    </td>
                    </tr>
                    <tr>
                    
                    <td  colspan='2' style={{padding: '5px 15px   5px 0px'}}>
                    <textarea style={{resize: 'none', background:'#EFF1F4', width: '100%',border: '1px solid #ccc',padding: '20px 4px', borderRadius: '5px'}}>说点什么。。。</textarea> 
                    
              </td>
            </tr>
              </table>
               
  {/*end白色div*/}</div>
  <div style={{ left:'280px',top:'10px',position:'absolute'}}> <img src={imgURL2} />  </div>
  <div style={{ left:'20px',top:'200px',position:'absolute'}}> <img src={laba} />  </div>
   
  <div style={{ left:'20px',top:'330px',position:'absolute'}}> <img src={qizi} />  </div>
 
 
            </div>
              
        })             
  }  
  </ul> 
    
{/*列表divEND*/}</div>
      </div>
    </TabPane>
      {/* TAB3---------------------------------- TAB3--------------------------------TAB3 */}
    <TabPane tab="服务跟踪" key="3">
    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <table style={{width: '100%'}}>
        <tr>
          <td>
            <table style={{width: '100%'}}>
              <tr>
                <td colspan='6'> 
                    <textarea style={{resize: 'none',width: '100%',border: '1px solid #ccc',padding: '20px 4px', borderRadius: '5px'}}>填写服务跟踪记录...</textarea> 
                </td>
              </tr>
              
              <tr>
              <td  colspan='6' style={{  padding: '10px 0px   10px 0px'}}>
                <button type="button" style={{backgroundColor: '#1E90ff', color:'#fff',border: '1px solid #ccc', borderRadius: '5px'}}>保存</button>
                
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <select>
  <option value="volvo">按照最新跟踪排序</option>
  <option value="saab">按照录入时间排序</option> 
            </select>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />全部 </label>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />和业务机会相关 </label>&nbsp;&nbsp;&nbsp;
  
          </td>
        </tr>
        <tr>
          <td style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <tr>
              <td colspan='2'  style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   0px 15px'}}>
                <h2><font color="#FFA500">上海银联股份有限公司222</font></h2>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '0px 0px   0px 15px'}}>
                发布于 2018-03-02 18：24
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                发起人：<font style={{fontWeight:'bold'}}> 王承揽（我）</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
                预计资金：<font style={{fontWeight:'bold'}}>200,200.00  </font>
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                业务类型：<font style={{fontWeight:'bold'}}>新三板上市</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
               截止日期：<font style={{fontWeight:'bold'}}>2018-03-03</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '5px 0px   5px 15px'}} >
                机会描述：<font style={{fontWeight:'bold'}}>银联有意几年IPO，麻烦提供一份适合银联的详尽IPO解决方案。</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td style={{padding:'15px'}}>
                    最新跟踪记录：2018-03-05 张承做 <font style={{fontWeight:'bold'}}>完成了IPO解决方案，可以正式立项签合同了</font>
                </td>
                </tr>
              </table>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td  style={{padding:'15px'}}>
                    对接部门：<font style={{fontWeight:'bold'}}>IPO业务部</font>
                </td>
                <td  style={{padding:'15px'}}>
                    对接人：<font style={{fontWeight:'bold'}}>张承做</font>
                </td>
                <td  style={{padding:'15px'}}>
                    分配人：<font style={{fontWeight:'bold'}}>李协同</font>
                </td>
                </tr>
              </table >
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '5px 0px   5px 15px'}}>
                已对接：<font style={{fontWeight:'bold'}}>张承做（IPO业务部）</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '10px 15px   15px 15px'}}>
                <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                  <tr>
                    <td   style={{padding: '5px 0px   5px 15px'}}>
                    <font style={{fontWeight:'bold'}}>张承做(IPO业务部)说:</font>
                    </td>
                  </tr>
                  <tr>
                    <td   style={{padding: '5px 0px   5px 15px'}}>
                      这个需求我之前也提了，但是好像没有继续做下去，我尽力做方案，但不保证成啊，哥
                    </td>
                  </tr>
                  <tr>
                    <td style={{padding: '5px 15px   5px 15px'}}>
                    <hr  />
                    </td>
                    </tr>
                  <tr>
                    
                          <td   style={{padding: '5px 15px   5px 15px'}}>
                          <textarea style={{resize: 'none', background:'#D3D3D3', width: '100%',border: '1px solid #ccc',padding: '20px 4px', borderRadius: '5px'}}>说点什么。。。</textarea> 
                          
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <tr>
              <td colspan='2'  style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   0px 15px'}}>
                <h2><font color="#FFA500">上海长城宽带</font></h2>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '0px 0px   0px 15px'}}>
                发布于 2018-03-01 18：24
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                发起人：<font style={{fontWeight:'bold'}}> 王承揽（我）</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
                预计资金：<font style={{fontWeight:'bold'}}>400,200.00  </font>
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                业务类型：<font style={{fontWeight:'bold'}}>新三板上市</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
               截止日期：<font style={{fontWeight:'bold'}}>2018-03-03</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '5px 0px   5px 15px'}} >
                机会描述：<font style={{fontWeight:'bold'}}>银联有意几年IPO，麻烦提供一份适合银联的详尽IPO解决方案。</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td style={{padding:'15px'}}>
                    最新跟踪记录：2018-03-05 张承做 <font style={{fontWeight:'bold'}}>完成了IPO解决方案，可以正式立项签合同了</font>
                </td>
                </tr>
              </table>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td  style={{padding:'15px'}}>
                    对接部门：<font style={{fontWeight:'bold'}}>IPO业务部</font>
                </td>
                <td  style={{padding:'15px'}}>
                    对接人：<font style={{fontWeight:'bold'}}>张承做</font>
                </td>
                <td  style={{padding:'15px'}}>
                    分配人：<font style={{fontWeight:'bold'}}>李协同</font>
                </td>
                </tr>
              </table>
              </td>
            </tr>
            </table>
          </td>
        </tr>
    </table>
      </div>
    </TabPane>
      {/* TAB4---------------------------------- TAB4--------------------------------TAB4 */}
    <TabPane tab="运营数据（协）" key="4"><div>
{/*列表div*/}<div style={{padding:'15px 15px'}}>    
{/*单条信息div*/}<div style={{ }}>
            <p>发布于 2013-02-19 13：24</p>
          <div style={{border:'1px solid #ccc',borderRadius:'5px',padding:'15px 15px',background:'#F5F5F5'}}>
              <h3  style={{fontWeight:'bold'}}>王承揽：发起了【上海协和发展业务机会】内核评审流程</h3>
{/*橙色div*/}<div style={{height:'55px', background:'#FFF8DB', border:'1px solid #FADD9B',borderRadius:'5px',padding:'15px 15px'}}>
            <div style={{width:'70%',float:'left'}}>
              <font style={{color:'#ADADAD'}}>最新跟踪记录：2018-02-19 王承揽</font><font style={{fontWeight:'bold'}}> 发起了业务机会的内核评审 </font> 
            </div>
            <div style={{width:'30%',float:'right'}}>
            <font style={{color:'#F7986B'}}>详细跟踪记录</font>
            </div>
                        </div>
            <div style={{ padding:'15px 0px 5px 0px',height:'33px'}}>
            <input value='查看' type='button' onClick={() => this.componentDidMount()} style={{ border:'none', height:'28px', borderRadius:'5px',width:'70px', float:'right',background:'#1F93FF',color:'#fff'}}/>
            </div>
            </div>
{/*单条信息divEND*/}</div>   
{/*单条信息div*/}<div style={{ }}>
            <p>发布于 2013-02-19 13：24</p>
          <div style={{border:'1px solid #ccc',borderRadius:'5px',padding:'15px 15px',background:'#F5F5F5'}}>
              <h3  style={{fontWeight:'bold'}}>王承揽：发起了【认领客户-上海银联科技】流程</h3>
{/*橙色div*/}<div style={{height:'55px', background:'#FFF8DB', border:'1px solid #FADD9B',borderRadius:'5px',padding:'15px 15px'}}>
            <div style={{width:'70%',float:'left'}}>
              <font style={{color:'#ADADAD'}}>最新跟踪记录：2018-02-19 张主管</font><font style={{fontWeight:'bold'}}> 同意通过 </font> 
            </div>
            <div style={{width:'30%',float:'right'}}>
            <font style={{color:'#F7986B'}}>详细跟踪记录</font>
            </div>
                        </div>
            <div style={{ padding:'15px 0px 5px 0px',height:'33px'}}>
            <input value='查看' type='button' style={{ border:'none', height:'28px', borderRadius:'5px',width:'70px', float:'right',background:'#1F93FF',color:'#fff'}}/>
            </div>
            </div>
{/*单条信息divEND*/}</div>  
{/*单条信息div*/}<div style={{ }}>
            <p>发布于 2013-02-19 13：24</p>
          <div style={{border:'1px solid #ccc',borderRadius:'5px',padding:'15px 15px',background:'#F5F5F5'}}>
              <h3  style={{fontWeight:'bold'}}>李协同：分配了【业务机会-上海墨鱼科技有限公司】</h3>
{/*橙色div*/}<div style={{height:'55px', background:'#FFF8DB', border:'1px solid #FADD9B',borderRadius:'5px',padding:'15px 15px'}}>
            <div style={{width:'70%',float:'left'}}>
              <font style={{color:'#ADADAD'}}>最新跟踪记录：2018-02-19 李协同</font><font style={{fontWeight:'bold'}}> 分配了一个业务机会 </font> 
            </div>
            <div style={{width:'30%',float:'right'}}>
            <font style={{color:'#F7986B'}}>详细跟踪记录</font>
            </div>
                        </div>
            <div style={{ padding:'15px 0px 5px 0px',height:'33px'}}>
            <input value='查看' type='button' style={{ border:'none', height:'28px', borderRadius:'5px',width:'70px', float:'right',background:'#1F93FF',color:'#fff'}}/>
            </div>
            </div>
{/*单条信息divEND*/}</div>            
{/*列表divEND*/}</div>
      </div></TabPane>
      {/* TAB5---------------------------------- TAB5--------------------------------TAB5 */}
    <TabPane tab="服领导驾驶舱（领）" key="5">
 
 
    {/* <ul>  
                    {  
                        students.map(function(v){  
                            return <li>{v.name}+++++{v.id}</li>  
                        })  
                    }  
                </ul>    */}
    </TabPane>
      {/* TAB6---------------------------------- TAB6--------------------------------TAB6 */}
    <TabPane tab="机构业务概览（领）" key="6">
    

    </TabPane>

  </Tabs>
        </div>
            </div>     
{/* 右侧人员div */}
<div>
 
 <div>
       <div style={{background:'#fff', width :'20%', height:'100%',float:'left',border:'1px solid #ccc',borderRadius: '5px',padding:'15px 15px',marginLeft:'15px',marginTop:'15px'}}>
                <div style={{border:'none', height:'85px'}}>
                <div style={{width:'40%',float:'left'}}>
                <img src={imgURL} />  
                </div>
                <div style={{width:'60%',float:'right'}}>
                <br/>
                  <h3 style={{fontWeight:'bold'}}>{member.membername}</h3>
                   <br/>
                  <font style={{lineHeight:'20px'}}>{member.memberms}</font>
                </div>
                </div>
{/*右侧第一横线 */}<div style={{padding:'10px 0px 10px 5px', borderBottom:'1px solid #ccc',}}>
                      <font style={{fontWeight:'bold'}}>通知公告</font>
{/*右侧第一横线END */}</div>
{/*右侧第二横线 */}<div style={{height:'45px', padding:'10px 0px 10px 5px', borderBottom:'1px solid #ccc',}}>
                    <div style={{width:'50%',float:'left'}}>
                    <font style={{fontWeight:'bold'}}>我的收入</font>
                    </div>
                    <div style={{width:'50%',float:'right'}}>
                    <font style={{fontWeight:'bold',color:'#FF9E0A'}}>{member.shouru}</font>
                    </div>
{/*右侧第二横线END */}</div>
{/*右侧第三横线 */}<div style={{height:'50px', padding:'10px 0px 10px 5px', borderBottom:'1px solid #ccc',}}>
                    <div style={{width:'50%',float:'left', padding:'3px 0px 0px 0px'}}>
                    <font style={{fontWeight:'bold'}}>对接中的机会</font>
                    </div>
                    <div style={{width:'50%',float:'right'}}>
                    <h3 style={{fontWeight:'bold'}}>{member.duijiejh}</h3>
                    </div>
{/*右侧第三横线END */}</div>
                    <div style={{height:'50px',padding:'10px 0px 0px 5px'}}>
                      <div style={{width:'65%',float:'left'}}>
                        <h3 style={{fontWeight:'bold'}}>客户管理</h3>
                      </div>
                      <div style={{width:'35%',float:'right'}}>
                        <font style={{color:'#1890FF'}}>帮我分析</font>
                      </div>
                    </div>
{/*右侧第四横线 */}<div style={{height:'100px', padding:'0px 0px 10px 5px', borderBottom:'1px solid #ccc',}}>
                    <table style={{width:'100%'}}>
                      <tr>
                        <td style={{width:'65%',height:'20px'}}>
                          <font>待服务的客户</font>
                        </td>
                        <td  style={{width:'35%'}}>
                          <font>{member.daifuwdkh}</font>
                        </td>
                      </tr>
                      <tr>
                      <td style={{width:'65%',height:'20px'}}>
                          <font>客户的重大提醒</font>
                        </td>
                        <td>
                          <font>{member.kehudzdtx}</font>
                        </td>
                      </tr>
                      <tr>
                      <td style={{width:'65%',height:'20px'}}>
                          <font>客户商机</font>
                        </td>
                        <td>
                          <font>{member.kehusj}</font>
                        </td>
                      </tr>
                    </table>
{/*右侧第四横线END */}</div>
                    <div style={{height:'50px',padding:'10px 0px 0px 5px'}}>
                      <div style={{width:'65%',float:'left'}}>
                        <h3 style={{fontWeight:'bold'}}>业务机会管理</h3>
                      </div>
                      <div style={{width:'35%',float:'right'}}>
                        <font style={{color:'#1890FF'}}>帮我分析</font>
                      </div>
                    </div>
                <div style={{height:'100px', padding:'0px 0px 10px 5px' }}>
                    <table style={{width:'100%'}}>
                      <tr>
                        <td style={{width:'65%'}}>
                          <font>新增的业务机会</font>
                        </td>
                        <td  style={{width:'35%'}}>
                          <font>{member.xinzengdywjh}</font>
                        </td>
                      </tr>
                      </table>
                  </div>
                 </div>       
 
 </div>
    
 
</div>






            </div>
        );
    }
}

export default connect((state) => ({
  items: state.items,
  filter: state.filter
}), (dispatch) => ({
  actions: bindActionCreators({ ...itemsActions, ...filterAction }, dispatch)
}))(Main);
