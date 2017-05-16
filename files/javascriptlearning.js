/*var number = 1;

while (number <=5) {
	console.log(number);
	number++ ;
}*/

var num = 1;
while (num <=10) {
	console.log(num);
	num++
}

"There will be 16 sheep after 1 month(s)!"

var sheep = 4;
var monthNum = 1;
var monthPrint = 12;
while (monthNum <= monthPrint) {
	document.write("There will be " + sheep + "sheep after " + monthNum + "month(s)!");
	monthNum++
	sheep *= 4;
}

Задание. Сконструировать цикл чисел по убыванию от 10 до 1, но уже при помощи for.


var stop = 0;

for (var num =10; num > stop ; num--){
	document.write(num);
}

Задание. Трансформировать предыдущий цикл while в for, используя те же переменные. Нельзя забывать про начальное число овец и месяцев, выводимых из цикла.
var monthNum = 1;
var monthPrint = 12;
for ( var sheep = 4; monthNum <= monthPrint; monthNum++){
	sheep *=4
	document.write("There will be " + sheep + "sheep after " + monthNum + "month(s)!");
}

Задание. Плотина Гувера имеет 19 генераторов различных типов. Для простоты предположим, что первые 4 из них выпускают 62 МВт, а остальные 15 - 124 МВт. 
В hooverDam.js нужно разработать систему двух циклов, 
которая превращает каждый генератор в прогрессию и печатает новое общее количество генерируемых МВт.
Первые 4 генератора должны обрабатываться циклом while, а остальные 15 - for. 
Каждая выходящая линия должна напоминать следующие строки, с установленными значениями в соответствующих случаях:

"Generator #1 is on, adding 62 MW, for a total of 62 MW!"
"Generator #2 is on, adding 62 MW, for a total of 124 MW!"

var gen1Num = 1;
var gen1Power = 62;
var gen2Power = 124;
while (gen1Num <= 4){
	document.write("Generator #" + gen1Num + "is on, adding 62 MW, for a total of" + gen1Power + "MW!");
	gen1Num++ 
	gen1Power = gen1Power + 62
	}
	for (var gen2Num = 4; gen2Num <=15; gen2Num++) {
	document.write("Generator #" + gen2Num + "is on, adding 124 MW, for a total of" + gen2Power + "MW!");
	gen2Power = gen2Power + 124
}
------------
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
totalMW += 62
	document.write("Generator #" + currentGen + "is on, adding 62 MW, for a total of" + totalMW + "MW!");
	currentGen++
	
}
for ( var currentGen = 5; currentGen <=19; currentGen++) {
		totalMW += 124
		document.write("Generator #" + currentGen + "is on, adding 124 MW, for a total of" + totalMW + "MW!");
		}
		
		
Задание. В countdown.js трансформировать цикл while в условный так, чтобы выводились только чётные числа от 10 до 0 в порядке убывания.

var num = 10;
while (num > 0) {
if (num%2= =0) {
	document.write(num);
} else {
num--
}}

Задание. Национальный парк Бесплодные земли хотел бы напечатать определенные сообщения в зависимости от того открыт ли парк.
 Они попросили изменить свой badlands.js файл для печати одного из следующих сообщений в зависимости от логического значения (истина или ложь)
 переменной parkIsOpen. Статус переменной на сегодняшний день уже установлен. Следует добавить пару условных операторов для печати одного из
 следующих сообщений на основе переменной parkIsOpen:

"Welcome to the Badlands National Park! Try to enjoy your stay."

ИЛИ

"Sorry, the Badlands are particularly bad today. We're closed!"

var parkIsOpen = true;

if (parkIsOpen = true) {
	document.write("Welcome to the Badlands National Park! Try to enjoy your stay.");
}
else {
	document.write("Sorry, the Badlands are particularly bad today. We're closed!");
}
	
	
Задание. Вернувшись в Долину Смерти, ученые увидили, что ситуация с овцами быстро вышла из под контроля.
 67 000 000 снежных овец, как сообщается, будет трудно управлять!
Ученые решили, что при увеличении популяции больше, чем на 10 000 в месяц, половина из существующих овец будет отправлена в другие регионы,
 которые не подвергаются угрозе гиперпопуляции. Скорость увеличения численности овец, однако, останется неизменной (x4). 
 Кроме того, после выполнения первого условия, популяция не испытывает рост за месяц (x4), пока овцы не будут удалены, если таковые имеются.
 В существующем цикле for поместить условие, что:

    Половина поголовья овец делится в приемлемое время;
    Выводить в консоль уведомление, если популяция поднимается выше 10 000.
    Новое уведомление будет выводиться до полного сообщения о поголовье за этот месяц и будет принимать следующий формат:

"Removing <number> sheep from the population. Phew!"

var numsheep = 67000000;
var removesheep = numsheep % 10000;
var monthstoPrint = 12;
for (monthNumber = 1; monthNumber <= monthstoPrint; monthNumber++) {
	if (numsheep > 10000) {
		numsheep *4;
	}
	else {
		document.write("Removing" + removesheep + " sheep from the population. Phew!");
	}
}


Задание. Ну, с 67 миллионов до 1 миллиона - значительное снижение, но это всё ещё слишком много для экосистемы хрупкой Долины Смерти.
 Рейнджерс составил следующий новый план сокращения численности:

    Уменьшать популяцию на 75% в месяцах, кратных 4.
    Во всех других месяцах, когда сокращение 75% не состоится, если численность превышает 10 000 в начале месяца,
	сократить её наполовину, как в прошлом задании.
    Реализовать новый план сокращения овец путем структурирования двух различных условий, которые гарантируют,
	что только один вид сокращения происходит в любой месяц. Можно объявить новую переменную, отслеживающую сколько удаляется овец (хотя не обязательно).
    Популяция будет продолжать расти в размере x4, а также выводимое сообщение останется на прежнем уровне.
	Использовать то же сообщение удаления в выводе для обоих случаев уменьшения овец:

"Removing <number> sheep from the population. Phew!"


var removesheep;
var monthstoPrint = 12;
var numsheep = 1000000;
for ( var monthNumber = 1; monthNumber <= monthstoPrint; monthNumber++) {
	if (monthNumber%4 !=0) &&( numsheep > 10000 ) {
		numsheep = numsheep / 2;
		document.write("Removing" + removesheep + " sheep from the population. Phew!");
	}
	else if ( monthNumber%4 ==0 ) && ( numsheep > 10000 ) {
		removesheep = numsheep *0,25;
		document.write("Removing" + removesheep + " sheep from the population. Phew!");
	}

	else {
	document.write("There are" + numsheep + " in the valley!");
}
}
-------------
var removesheep = 0;
var monthstoPrint = 12;
var numsheep = 4;
for ( var monthNumber = 1; monthNumber <= monthstoPrint; monthNumber++) {
	if (monthNumber%4 !=0 && numsheep > 10000 ) {
		removesheep = numsheep / 2;
		document.write("Removing" + removesheep + " sheep from the population. Phew!");
		numsheep = (numsheep - removesheep) *4 ;
	}
	else if ( monthNumber%4 ==0  &&  numsheep > 10000 ) {
		removesheep = numsheep *0,25;
		document.write("Removing" + removesheep + " sheep from the population. Phew!");
		numsheep = (numsheep - removesheep) *4 ;
	}

	else {
	document.write("There are" + numsheep + " in the valley!");
	numsheep = (numsheep - removesheep) *4 ;
}
}

Задание. Ребята из дамб Гувера вызывают назад, и хотели бы получить файл, который показывает, что происходит, когда включены только четные турбины. 
Кроме того, они хотят всё это только в одном цикле for. (Они имеют склонность контролировать каждый шаг).
С набором комплекса условных операторов, построить путь внутри цикла только с включенными четными турбинами сегодня.
 Выходная мощность таже: генераторы 1-4 производят 62 МВт и генераторы 5-19 производят 124 МВт. Формат вывода должен быть следующим:

"Generator #1 is off.
Generator #2 is on, adding 62 MW, for a total of 62 MW!"

Несколько исходных переменных уже готово. В цикле возможны 3 сценария при создании условия:

    Генератор выключен
    Генератор обеспечивает 62 МВт электроэнергии
    Генератор обеспечивает 124 МВт электроэнергии.


var totalGen = 19;
var totalMW = 0;

for (var currentGen=1; currentGen < totalGen; currentGen++ ) {
	if ( currentGen % 2 == 1) {
		document.write("Generator #"+ currentGen +" is off.");
	}
	else if (currentGen < 5) {
		totalMW += 62;
		document.write("Generator #"+ currentGen +" is adding 62 MW, for a total of" + totalMW +"MW!");
	}
	else if (currentGen > 5) {
		totalMW += 124;
		document.write("Generator #"+ currentGen +" is adding 124 MW, for a total of" + totalMW +"MW!");
	}
	}
	

Задание. Смотрители национального парка Бесплодные земли решили, что консоль браузера не очень красивый и эффективный способ,
чтобы показать их приветствие пользователю. Нужно изменить код ниже, чтобы использовать всплывающее окно,
 которое сообщает пользователю открыт парк или нет. Имеем:

var parkIsOpen = false;
if(parkIsOpen){
  alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
  alert("Sorry, the Badlands are particularly bad today. We're closed!");
}

Задание. В userProfile.js попросить пользователей указать их возраст во всплывающем окне, и хранить ответ в переменной с именем userAge. 
Использовать следующий вопрос в диалоговом окне:

"What's your age, user?"


var userAge = prompt("What's your age user?");

Задание. Теперь, используя ​​переменную userAge, нужно убедиться, что пользователь ввёл правильно свой возраст.
 Применить всплывающее окно и сохранить логический результат этой функции в переменной ageIsCorrect,
 воспользовавшись следующим форматом для сообщения во всплывающем окне:

"You entered <age>. Is this correct?"

var userAge = prompt("What's your age, user?");
var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");

Задание. Теперь нужно обернуть код подтверждения в цикл while, который продолжает выполняться до тех пор, пока пользователь не введёт правильный возраст.
 Итерация должна повторно предлагать пользователю ввести возраст, если изначально ввод был не верным.
 В любой из этих подсказок использовать то же самое сообщение, которое было предложено первоначально.
 Переменную ageIsCorrect нужно инициализировать самостоятельно вне цикла, а затем использовать набор условий внутри цикла изменяя логическое значение ageIsCorrect,
 когда пользователь вводит его правильно. Как только возраст введён правильно, всплывает окно:

"Great! Your age is logged as <age>." 

var ageIsCorrect = false;
while (ageIsCorrect== false){
	var userAge = prompt("What's your age, user?"); 
	if (confirm("You entered " + userAge + ". Is this correct?")) {
		alert("Great your age is" + userage);
		ageIsCorrect = true;
	}
}

Задание. В uniqueMath.js построить объявление функции multiplyTrio, которая принимает 3 аргумента. 
Нужно умножить эти числа друг с другом и вернуть (return) полученный результат. 
Можно использовать любые имена переменных и аргументов.

function multiplyTrio(a,b,c){
	return a*b*c;
}
document.write( multiplyTrio(3,2,3));

Задание. Построить объявление функции maxOf2, которая принимает 2 числа и возвращает значение большего. 
Нужно обратить внимание на то, что числа могут быть равны, а выведено должно быть только одно из чисел.


function maxOf2 (a,b){
	if (a>=b){
		return a;
	} else {
		return b;
	}
}
document.write( maxOf2(3,5));

Задание. В uniqueMath.js ниже расположена функция mystery. Отрефакторить код функции так, чтобы она включала в себя только одну линию:

function mystery(x, y) {
       return (4 * x * y)+ (3 * y + 5);
}

Задание. Парковые смотрители в Национальном парке Долины Смерти разделили свои ежедневные обязанности в пользу популяции снежных овец.
 Они нуждаются в функции feedPerRanger, написанной на сайте рейнджера, которая принимает:
 (1) текущую популяцию овец И (2) количество смотрителей парка в течение всего дня; а затем выводит (alert) на экран количество корма,
 за которое каждый смотритель парка должен нести ответственность в этот день. Это позволит смотрителям загружать свои официальные Big-Ass Ranger грузовики (BARTs) соответственно.
 Каждой овце нужно 2 фунта предоставленной рейнджером пищи в день (в дополнение к редкой растительности, которую она жуёт). Построить объявление функции feedPerRanger.
 Выходу функции должен соответствовать следующий формат:

"Each Park Ranger should load <number> lb(s) of feed into his/her BART today."

function feedPerRanger (sheep,ranger){
	var number = (sheep*2) / ranger;
	alert("Each Park Ranger should load" + number + " lb(s) of feed into his/her BART today.");
}
feedPerRanger(10,3);

Задание. Возвращаясь на дамбы Гувера; техникам надоели выключения всех генераторов сразу или ни одного вообще(ANGST).
 Они решили, что им нужно значительно больше контроля за тем, какие генераторы выключаются. 
 Они попросили разработать способ скорректировать общее количество сгенерированных МВт при включении или отключении одного выбранного генератора.
 Построить объявление функции с именем changePowerTotal, которая принимает:

    Общую мощность текущего тока (число)
    ID генератора (число)
    Новый статус генератора (строка, которая говорит, что "включено" или "выключено")
    И величина мощности производимой этим генератором (число)
    Функция должна:
    вернуть новую общую генерируемую мощность
    предупредить специалиста в следующих форматах Для включения:

"Generator #2 is now on, adding 62 MW, for a total of 62 MW!"

Или для выключения:

"Generator #2 is now off, removing 62 MW, for a total of 0 MW!"

function changePowerTotal (totalMW, currentGen, genStat, currentMW) {
	if (genStat == "off"){
		var newTotal =  totalMW-currentMW;
	alert("Generator #" + currentGen + "is now off, removing" + currentMW + ", for a total of " +newTotal + "MW!");
	}
	else if (genStat == "on"){
	var newTotal = totalMW-currentMW;	
	alert("Generator #" + currentGen + "is now on, adding" + currentMW + ", for a total of " + newTotal + "MW!");
	}
	return newTotal;
}
	changePowerTotal(120,3,"on", 24);
	
	
	Задание. В массив ниже добавить одно значение так, чтобы оно привело числа в порядок.

var list = [1, 2, 3, 7, 5, 6, 7, 8, 9];

list[3] = 4;

Задание. Используя определенную функцию массива, которая добавляет данные к концу массива, добавить следующее число для вновь скорректированного списка:

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
list.push(10);

Задание. Создать массив values, который содержит в себе строковое, числовое и логическое значения в перечисленном порядке.

var guru = ["super",90, true];

Задание. Теперь, используя определенную функцию массива, удалить последнюю запись из массива values и сохранить результат в переменной, названной bool.

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var bool = list.pull(8);

Задание. Обращая внимание на следующие настройки. Ввести строку кода, которая объявляет переменную infant и использует массив eightiesMovies для доступа к слову "Baby".

var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];

var infant = eightiesMovies[1][4];

Задание. Теперь нужно вывести на экран (alert) всю movie1 в eightiesMovies, используя только переменную eightiesMovies.
 Использовать оператор сцепления, чтобы объединить слова в строку. И обратить внимание на пробелы.

var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];

alert(eightiesMovies[0][0] +" " +eightiesMovies[0][1] );

Задание. Построить функцию numStrings с помощью цикла, который считает все строки в массиве аргумента list.
 Не забыть вернуть сумму строк выведенных ранее функцией.
var list = [1,"eddd",3,4, "test"]

function numStrings (list){
var amount = 0;
	for (var listItem = 0; listItem < list.length; listItem++) {
	if (typeof list[listItem] == "string") {
		amount++;
	} else {
	list[listItem]= undefined;
	}
	
}

return(amount);
}

Задание. Внутри файла Haunted Hickory House, разработчики из Forest of Function Expressions Theme Park создали объявление функции forestFright.
 Однако, они решили не хранить функцию в памяти, а использовать её только если свирепые животные проделают свой путь в HHH.
Изменить функцию на анонимное функциональное выражение и присвоить её переменной runAway.

var runAway = function () {
    var toAlert = "";
    for (var i = 0; i < 5; i++) {
        toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
    }
    alert(toAlert);
};
		
Задание. Разработчики Death-Defying Dogwoods вычислили специальную формулу для подсчёта Страха в DDD (это важно знать, если вы работаете в тематических парках).
 Их тайная формула основана на количестве людей в Dogwoods, текущих осадках и, как можно ожидать, количестве акул. Да. Акул.
Вот их гениальная формула:

var fearGenerated = function (numPeeps, rainInInches, numSharks) {
    var rainFear = numPeeps * rainInInches;
    var sharkFear = numSharks * numSharks * numSharks;
    var totalFear = sharkFear + rainFear;
    return totalFear;
};

Целью разработчиков является сгенерировать Страх не больше 400, но и не меньше 100 (это не работаете в бизнесе, к сожалению!).
Они попросили проанализировать формулу, а затем присвоить значения переменным в dogwoods.js, которые должны вызвать выражение функции на следующей строке,
 с помощью новых значений в качестве параметров, и сохранить результат в переменной fear.


var people= 3;
var rain = 11;
var sharks = 3;
var fearGenerated = function (numPeeps, rainInInches, numSharks) {
    var rainFear = numPeeps * rainInInches;
    var sharkFear = numSharks * numSharks * numSharks;
    var totalFear = sharkFear + rainFear;
    return totalFear;
};
var fear = fearGenerated(people,rain,sharks);


Задание. Периодически разработчикам Haunted Hickory House нужно напоминать об их собственной гениальной формуле.
 Они попросили найти способ, чтобы выводить предупреждение формулы функции на экран, а не просто выполнять функцию.
 Другими словами, они хотели бы видеть реальное содержимое переменной, которая хранит свои функции. 
 В hauntedHickoryHouse.js, написать строку кода, который обрабатывает их просьбу. Ниже приводится присвоенное выражение функции, для справки:

var fearGenerated = function (numPeeps, rainInInches, numSharks) {
    var rainFear = numPeeps * rainInInches;
    var sharkFear = numSharks * numSharks * numSharks;
    var totalFear = sharkFear + rainFear;
    return totalFear;
};
var people= 3;
var rain = 11;
var sharks = 3;
var fear = fearGenerated(people,rain,sharks);
alert("it's " + fear);


Задание. Итак, само собой разумеется, что некоторые люди не захотят испытать the Hickory Haunted House если страх значительно повышен в этот день.
Разработчики попросили проверить уже созданное значение страха на этот день и решить какой он: НИЗКИЙ, СРЕДНИЙ или ВЫСОКИЙ.
 В зависимости от тяжести страха, они хотят конкретное подтверждающее сообщение, построенное внутри функционального выражения,
 которое сохраняется в переменной fearMessage. Затем эта переменная должна просматриваться в функции confirmRide.
 Кроме того, результаты вызова confirmRide следует хранить в переменной с именем startRide (т.е. истинно, или ложно, от подтверждения пользователя).
Сообщения подтверждения должны иметь следующие форматы:

    Для уровней страха менее 200:

Fear Level: LOW
Should be no problem at all...mwahaha.
Still wanna ride?

    Для уровней страха от 200 и до 300 включительно:

Fear Level: MEDIUM
You may want to rethink this one, man. MWAHAHA!
Think you'll make it?

    Для уровней страха от 300 до 400:

Fear Level: HIGH
ABANDON ALL HOPE!!
Have a death wish?

var fearGenerated = function (numPeeps, rainInInches, numSharks) {
    var rainFear = numPeeps * rainInInches;
    var sharkFear = numSharks * numSharks * numSharks;
    var totalFear = sharkFear + rainFear;
    return totalFear;
};
var people= 3;
var rain = 11;
var sharks = 3;
var fear = fearGenerated(people,rain,sharks);

function confirmRide (){
	if (fearGenerated < 200){
		var answer = confirm( "Fear Level: LOW /n"+ "Should be no problem at all...mwahaha. /n" + "Still wanna ride?");
		
	}
	else if (fearGenerated > 200 && fearGenerated <= 300){
		var answer = confirm( "Fear Level: medium /n"+ "You may want to rethink this one, man. MWAHAHA! /n" + "Think you'll make it??");
	}
	else (fearGenerated > 300 && fearGenerated < 400){
		var answer = confirm( "Fear Level: high /n"+ "ABANDON ALL HOPE!!. MWAHAHA! /n" + "Have a death wish???");
	}
}

console.log(answer);













