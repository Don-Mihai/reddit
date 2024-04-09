import expressAsyncHandler from 'express-async-handler';
import fs from 'fs';

function saveData(userId, propertyKey, propertyValue) {
  const dbFilePath = 'db.json';
  let fileData = {};

  try {
    // Пытаемся прочитать существующие данные из файла
    const existingData = fs.readFileSync(dbFilePath, 'utf8');
    fileData = JSON.parse(existingData);
  } catch (error) {
    // Если файл не существует или возникла ошибка при чтении, создаем пустой объект
    fileData = {};
  }

  // Обновляем данные в объекте
  fileData.users = fileData.users.map((user) => {
    if (String(user.id) === String(userId)) {
      let newValue = propertyValue;
      if (Array.isArray(user[propertyKey]) && Array.isArray(propertyValue)) {
        // Если свойство - это массив, добавляем новые данные к существующему массиву
        newValue = [...user[propertyKey], ...propertyValue];
      }

      return {
        ...user,
        [propertyKey]: newValue,
      };
    } else {
      return user;
    }
  });

  // Записываем обновленные данные обратно в файл
  fs.writeFileSync(dbFilePath, JSON.stringify(fileData, null, 2), 'utf8');
}

const uploadAvatar = expressAsyncHandler((req, res) => {
  let filedata = req.file;
  let userId = req.query?.userId;

  if (!filedata) {
    res.send('Ошибка при загрузке файла');
  } else {
    // Сохраняем путь до изображения в файле db.json
    console.log('userId', userId);
    saveData(userId, 'avatarUrl', filedata.filename);
    res.send(filedata.filename);
  }

  res.send('');
});

export default uploadAvatar;
