/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'wechat-test',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1e334b73f90cf47a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8ae5b49e749665ee694d540c7043cdfe',

  PROVINCE: '山西',
  CITY: '大同',
  earthyLoveWords: true,
  USERS: [
    {
      // 想要发送的人的名字
      name: '魏玮宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onqZ76Kx58pCifj6tr85F-iOp_bY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mYR4kRNh5oVNIiivPeKi6DPAMSUJ4lI_qEQUh_3BsuQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆', year: '2000', date: '04-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '靳常明', year: '1999', date: '09-28',
        },
        {
          type: '节日', name: '相识纪念日', year: '2016', date: '05-10',
        },
        {
          type: '节日', name: '爱上魏玮纪念日', year: '2016', date: '05-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2016-05-10' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '魏玮宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onqZ76GMiyQUEzP_LqQjVMhBpLik',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mYR4kRNh5oVNIiivPeKi6DPAMSUJ4lI_qEQUh_3BsuQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆', year: '2000', date: '04-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '靳常明', year: '1999', date: '09-28',
        },
        {
          type: '节日', name: '相识纪念日', year: '2016', date: '05-10',
        },
        {
          type: '节日', name: '爱上魏玮纪念日', year: '2016', date: '05-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2016-05-10' },
      ],
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'mYR4kRNh5oVNIiivPeKi6DPAMSUJ4lI_qEQUh_3BsuQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onqZ76Kx58pCifj6tr85F-iOp_bY',
    }
  ],

}

module.exports = USER_CONFIG

