# Kanban-доска

**Канбан-доска** - инструмент управления проектами, позволяющий следить за статусом задач на разных стадиях разработки. Метод основан на управлении выполнением задач с помощью карточек, сигнализирующих о наступлении и завершении определенных этапов.



### Исходное состояние

Разработанная Канбан-доска имеет 4 блока с задачами:

- **Backlog** (задачи, которые требуют уточнения перед тем, как брать их в работу);

- **Ready** (задачи, которые могут быть взяты в работу);

- **In progress** (задачи, которые уже в работе);

- **Finished** (законченные задачи).

  ![kanban1](E:\_git\SF\P5_React\M20_KanbanBoard\readme\kanban1.jpg)

  

### Работа с Kanban-доской:

#### 1. Добавление новой задачи

Первоначально каждая задача всегда размещается в бэклоге — для анализа. 

- **Алгоритм добавления задачи:** 

  1) Нажать кнопку *«+ Add card»*.
  
  ![kanban2](./readme/kanban2.jpg)
  
  2) Заполнить название задачи.
  
  3) Нажать кнопку *«Submit»*.

![kanban3](./readme/kanban3.jpg)

Задача появится в бэклоге (при условии, что введено название ).

![image-20231129223915793](./readme/kanban4.png)



#### 2. Перемещение задач между списками

- Задачи для списка *Ready* берутся из списка задач *Backlog*, для *In Progress* - из *Ready*, и для *Finished* - из *In Progress*, соответственно.
- При отсутствии задач в предыдущем списке - кнопка "*+Add card*" неактивна и выделяется бледно-красным цветом.

![kanban4](./readme/kanban5.jpg)

#### 3. Детальная страница задачи

- При клике на заголовок задачи осуществляется переход на детальную страницу задачи.

  ![kanban5](./readme/kanban6.jpg)

- На детальной странице задачи можно изменять описание задачи при клике на поле ввода. Если описание задачи оставить незаполненным - будет отображаться надпись `"This task has no description"`.

![kanban6](./readme/kanban7.jpg)

 - При клике на крестик в правом верхнем углу осуществляется переход обратно на главную страницу.

   

#### 4. Вывод количества задач в футер

В футере отображается количество активных и завершенных задач.

- - **Active tasks** — количество задач в списке *Backlog.*
  - **Finished tasks** — количество задач в списке *Finished.*
  
  ![kanban7](./readme/kanban8.jpg)
  
  

#### 5. Выпадающее меню пользователя

- При клике на блок в правом верхнем углу страницы — на аватар пользователя со стрелкой, появляется выпадающее меню.

  ![kanban8](./readme/kanban9.jpg)

- При клике на пункты меню ничего не происходит, но выбранный пункт меню подчёркивается.

  ![kanban9](./readme/kanban10.jpg)

#### 6. Сохранение внесенных изменений

- Любые изменения, внесенные в приложение (добавление новых задач, перемещение задач между списками, изменение описания задачи), сохранются в **localStorage.**

	- При загрузке приложения отображаются задачи, ранее записанные в *localStorage* (или пустые списки, если в *localStorage* ничего нет). Если внести изменения и обновить страницу, то изменения сохраняются.