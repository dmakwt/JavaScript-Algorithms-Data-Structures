const reverse = (str) => {
  let result = [];

  function helper(helperParams) {
    if (helperParams.length === 0) {
      return;
    }

    result.push(helperParams[helperParams.length - 1]);

    helperParams.pop();

    helper(helperParams);
  }

  helper(str.split(''));

  return result.join('');
};

console.log(reverse('awesome')); // 'emosewa'
