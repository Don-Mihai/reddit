import expressAsyncHandler from 'express-async-handler';
import fs from 'fs';

function saveData(id, propertyKey, propertyValue) {
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
  fileData.posts = fileData.posts.map((item) => {
    if (String(item.id) === String(id)) {
      let newValue = propertyValue;
      if (Array.isArray(item[propertyKey]) && Array.isArray(propertyValue)) {
        // Если свойство - это массив, добавляем новые данные к существующему массиву
        newValue = [...item[propertyKey], ...propertyValue];
      }

      return {
        ...item,
        [propertyKey]: newValue,
      };
    } else {
      return item;
    }
  });

  // Записываем обновленные данные обратно в файл
  fs.writeFileSync(dbFilePath, JSON.stringify(fileData, null, 2), 'utf8');
}

const uploadImage = expressAsyncHandler((req, res) => {
  let filedata = req.file;
  let id = req.query?.id;

  if (!filedata) {
    res.send('Ошибка при загрузке файла');
  } else {
    // Сохраняем путь до изображения в файле db.json
    saveData(id, 'contentUrl', filedata.filename);
    res.send(filedata.filename);
  }

  res.send('');
});

export default uploadImage;
