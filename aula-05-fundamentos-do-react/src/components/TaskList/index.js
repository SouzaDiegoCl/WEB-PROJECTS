import styles from "@/components/TaskList/TaskList.module.css";



const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>Não há tarefas no momento.</p>;
  }

  return (
    <>
      <div>
        <h4 className="title">Lista de Tarefas:</h4>
        <br />
        <ol className={styles.items}>
          {/* Iterando sobree a lista de tarefas */}
          {tasks.map((t) => (
            <li key={t.id}>{t.descricao}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default TaskList;
