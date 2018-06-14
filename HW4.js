/**
 * 1.1. largest
 */
function largest(){
    let max = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        if(max < arguments[i]){
            max = arguments[i];
        }
    }
    return max;
}


/**
 * 1.2. smallest
 */
function smallest(){
    let min = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        if(min > arguments[i]){
            min = arguments[i];
        }
    }
    return min;
}


/**
 * 2. sum
 */

function sum(){
    let args = arguments.length;
    let arguments_list = arguments;
    if(args == 0){
        return "Введите аргументы";
    }
    if(args == 1){
        return arguments[0];
    }
    else{
        console.log(arguments_list);
        let add = function(n){
            if(n==1){
                return arguments_list[0];
            }
            else {
                arguments_list[n-2] = arguments_list[n-2] + arguments_list[n-1];
                n--;
                add(n);
            }
        }
        
       
        add(args);
    }
    return arguments_list[0];

}

sum(10,15,20);


/**
 * 3. transform
 */

 function transform(){
    let funcArray;
    if (Array.isArray(arguments[0])){
        funcArray = arguments[0].map(function(item){
                return function(){
                    return item;
                }
            });
        
    }
    return funcArray;
 }

 const baseArray = [10, 20, 30, 40, 50];

/**
 * 4. countDown
 */
function countDown(n){
    setTimeout(function run() {
        if(n >= 0){
            console.log(n--);
            setTimeout(run, 1000);
        }
    }, 1000);
}


/**
 * 5. bind
 */
Function.prototype.myBind = function () {
    const self = this;
    const Context = arguments[0];
    console.log(args);
    const Arguments = (Array.from(arguments)).slice(1);
    return function() {
        return self.apply(Context, Arguments);
      };
}

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1) // 10

 
