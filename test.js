fetch("https://open.bigmodel.cn/api/paas/v4/chat/completions", {
  method: "POST", // 因为curl命令中使用了--data，所以这里应该是POST请求
  headers: {
    Authorization: "Bearer a0166a5c17216218cf0ac15889dfe327.uu0rgI10O9HWD0jM",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "glm-4",
    messages: [
      {
        role: "system",
        content:
          "你是一个软件分析专家，请参考下面的分析内容猜测这个软件是否有害， 你的回答不能有“无法确定 XXX APP 是否有害”的说法，也不要回答“结合其他安全工具或平台对  APP 进行更全面的安全评估。”，相信你的判断",
      },
      {
        role: "user",
        content: "你好",
      },
    ],
    stream: true,
  }),
})
  .then((res) => {
    const reader = res.body?.getReader();
    if (reader == null || reader === undefined) return;
    let data = "";
    const decoder = new TextDecoder();
    function processResult(result) {
      const json = decoder.decode(result.value, { stream: true }).substring(6);
      console.log(json);
      if (json.indexOf("[DONE]") !== -1) {
        return;
      }
      try {
        const d = JSON.parse(json);
        data += d.choices[0].delta.content;
        
      } catch (e) {}

      if (result.done) {
        return;
      }
      return reader.read().then(processResult);
    }
    return reader.read().then(processResult);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
