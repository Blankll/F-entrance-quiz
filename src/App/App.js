import React, { Component } from 'react';
import './App.scss';
import HeroIndex from '../pages/HeroIndex/HeroIndex';

// TODO GTB-1: * 完成需求1，学员列表且是从后端获取数据，其余需求未完成
// TODO GTB-1: * 页面样式完成很小一部分，可以看到分组 分组列表与学员列表
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 有划分分组列表和学员列表,可以继续抽象复用学员item组件等
// TODO GTB-3: * 未使用语义化标签
// TODO GTB-3: * 使用了Flex布局，但没有使用scss
// TODO GTB-3: * 运用了许多ES6+语法及axios，很新的语法也看到有使用到
// TODO GTB-4: * 有小步提交，message可以更加明确具体
// TODO GTB-4: * 有抽出utils与api请求层
// TODO GTB-4: * 组件抽象复用有待加强，部分组件可以合并，注意命名（需求是学员，不是hero）
// TODO GTB-4: * 有划分comonents与pages
class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <HeroIndex />
      </div>
    );
  }
}

export default App;
