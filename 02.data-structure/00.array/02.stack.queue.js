// http://www.conardli.top/docs/dataStructure/%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97/%E7%94%A8%E4%B8%A4%E4%B8%AA%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97.html#%E9%A2%98%E7%9B%AE

// 用两个栈实现队列
const stack1 = [];
const stack2 = [];

function push(node) {
  stack1.push(node);
}
function pop() {
  if (stack2.length === 0) {
    while (stack1.length) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop() || null;
}

// 用两个队列实现一个栈
const queue1 = [];
const queue2 = [];

function push(x) {
  if (queue1.length === 0) {
    queue1.push(x);

    while (queue2.length) {
      queue1.push(queue2.shift());
    }
  } else if (queue2.length === 0) {
    queue2.push(x);

    while (queue1.length) {
      queue2.push(queue1.shift());
    }
  }
};

function pop() {
  if (queue1.length !== 0) {
    return queue1.shift();
  } else {
    return queue2.shift();
  }
}