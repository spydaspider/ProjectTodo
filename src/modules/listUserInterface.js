const TodoLists = [
  {
    id: 1,
    description: 'Wash the dishes',
    completed: true,
  },
  {
    id: 2,
    description: 'Complete the Todo List Project',
    completed: false,
  },
];

export default class ListUserInterface {
  static showLists = () => {
    const lists = TodoLists;
    ListUserInterface.addToDom(lists);
  };

  static addToDom = (lists) => {
    const listClass = document.querySelector('.lists');
    lists.forEach((list) => {
      listClass.insertAdjacentHTML(
        'beforeend',
        `
            <div class="todolists">
              <input class="input-check" type="checkbox" /><label class="check">${list.description}</label>
              <i class="fa fa-ellipsis-v"></i>
            </div>
            `,
      );
    });
  };
}
