// 配置好了直接在这里面定义表
module.exports = app => {
	const { STRING, INTEGER, DATE } = app.Sequelize;

	const User = app.model.define('user', {
		name: STRING(255),
		age: INTEGER,
		sex: STRING(30),
		created_at: DATE,
		updated_at: DATE,
	}, {
		// 其他的配置参数在这个里面写
		freezeTableName: true, // 使用默认表名，不会变复数
	});

	return User;
};
