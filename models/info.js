const Sequelize = require('sequelize');

module.exports = class Info extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            hobby: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Info',
            tableName: 'info',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci'
        });
    }

    static associate(db) {
        db.Info.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id' });  //Info모델 안에 "userId라는 컬럼 이름"으로 Users모델에 있는 "id값"을 새로운 컬럼으로 추가한다.
    }
};
