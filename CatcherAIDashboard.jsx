import { useState } from 'react';
import { Shield, LogOut, Link, Users, ChevronDown, Search, Bot, Plus, ArrowDown } from 'lucide-react';

const CatcherAIDashboard = () => {
  const [activeTab, setActiveTab] = useState('針對性守備');
  const [activeSubTab, setActiveSubTab] = useState('本日重大資安新聞');
  const [supplyChainRisk, setSupplyChainRisk] = useState('A');
  const [showRiskDetails, setShowRiskDetails] = useState(false);

  const handleSupplyChainRiskClick = () => {
    setShowRiskDetails(!showRiskDetails);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center">
          <div className="text-blue-900 font-bold">
            <div className="text-xl">遠東新世紀</div>
            <div className="text-sm">FAR EASTERN NEW CENTURY</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-900" />
          <span className="text-3xl font-bold text-blue-900">CATCHER AI</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="text-blue-900" size={24} />
          <Users className="text-blue-900" size={24} />
          <button className="flex items-center text-blue-900">
            <LogOut className="mr-1" size={20} /> 登出
          </button>
        </div>
      </header>

      {/* Subtitle */}
      <div className="bg-blue-900 text-white text-center py-8">
        <h1 className="text-2xl font-bold mb-2">全年無休的AI數位資安員工</h1>
        <h2 className="text-xl">守住關鍵每一球</h2>
      </div>

      {/* Key Metrics */}
      <div className="flex justify-center gap-2 p-4 bg-white">
        <MetricBox number="8" unit="則" label="本日重大資安新聞" onClick={() => {setActiveTab('針對性守備'); setActiveSubTab('本日重大資安新聞');}} clickable={true} />
        <MetricBox number="3" unit="筆" label="今日新增CVE" onClick={() => {setActiveTab('針對性守備'); setActiveSubTab('今日新增CVE');}} clickable={true} />
        <MetricBox 
          number="A" 
          unit="" 
          label="供應鏈平均風險" 
          onClick={handleSupplyChainRiskClick} 
          clickable={true} 
        />
        <MetricBox number="20" unit="%" label="本季釣魚郵件演練中招率" onClick={() => {setActiveTab('牛棚備戰'); setActiveSubTab('釣魚郵件');}} clickable={true} />
        <MetricBox number="4" unit="筆" label="可能發動攻擊Domain" onClick={() => {setActiveTab('捕手視角'); setActiveSubTab('攻擊Domain');}} clickable={true} />
      </div>
      
      {/* Supply Chain Risk Modal */}
      {showRiskDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-2/3 max-h-3/4 overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-blue-900">供應鏈平均風險詳情</h2>
              <button 
                onClick={() => setShowRiskDetails(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="text-4xl font-bold text-blue-900 mr-2">A</div>
                <div className="text-green-500 font-bold">
                  較上月提升 5%
                </div>
              </div>
              <div className="bg-gray-200 h-2 w-full rounded-full">
                <div className="bg-green-500 h-2 w-3/4 rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="border p-3 rounded">
                <h3 className="font-bold mb-1">高風險供應商</h3>
                <div className="text-3xl font-bold text-red-600">3</div>
                <div className="text-xs text-gray-500">較上月減少 2 家</div>
              </div>
              <div className="border p-3 rounded">
                <h3 className="font-bold mb-1">中風險供應商</h3>
                <div className="text-3xl font-bold text-yellow-600">12</div>
                <div className="text-xs text-gray-500">較上月增加 1 家</div>
              </div>
              <div className="border p-3 rounded">
                <h3 className="font-bold mb-1">低風險供應商</h3>
                <div className="text-3xl font-bold text-green-600">85</div>
                <div className="text-xs text-gray-500">較上月增加 3 家</div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-bold mb-2">風險趨勢 (近六個月)</h3>
              <div className="h-40 bg-gray-100 flex items-end justify-between p-2">
                {[65, 70, 60, 80, 75, 90].map((value, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-blue-600 w-8"
                      style={{ height: `${value}%` }}
                    ></div>
                    <div className="text-xs mt-1">{`${index+1}月`}</div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
              onClick={() => setShowRiskDetails(false)}
            >
              關閉
            </button>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="bg-blue-900 text-white flex">
        <TabButton label="球探情資" active={activeTab === '球探情資'} onClick={() => setActiveTab('球探情資')} />
        <TabButton label="針對性守備" active={activeTab === '針對性守備'} onClick={() => setActiveTab('針對性守備')} />
        <TabButton label="外野不漏接" active={activeTab === '外野不漏接'} onClick={() => setActiveTab('外野不漏接')} />
        <TabButton label="牛棚備戰" active={activeTab === '牛棚備戰'} onClick={() => setActiveTab('牛棚備戰')} />
        <TabButton label="捕手視角" active={activeTab === '捕手視角'} onClick={() => setActiveTab('捕手視角')} />
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-4 gap-4 p-4 bg-blue-900">
        {/* Sub Navigation based on active tab */}
        {activeTab === '針對性守備' && (
          <div className="col-span-4 bg-white rounded-md p-2 mb-2 flex space-x-4">
            <button 
              className={`px-4 py-1 rounded ${activeSubTab === '本日重大資安新聞' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveSubTab('本日重大資安新聞')}
            >
              本日重大資安新聞
            </button>
            <button 
              className={`px-4 py-1 rounded ${activeSubTab === '今日新增CVE' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveSubTab('今日新增CVE')}
            >
              今日新增CVE
            </button>
            <button 
              className={`px-4 py-1 rounded ${activeSubTab === 'CVE一覽表' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveSubTab('CVE一覽表')}
            >
              CVE一覽表
            </button>
          </div>
        )}
        
        {activeTab === '外野不漏接' && (
          <div className="col-span-4 bg-white rounded-md p-2 mb-2 flex space-x-4">
            <button 
              className={`px-4 py-1 rounded ${activeSubTab === '供應商清單總覽' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveSubTab('供應商清單總覽')}
            >
              供應商清單總覽
            </button>
            <button 
              className={`px-4 py-1 rounded ${activeSubTab === '遠東受影響資產' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveSubTab('遠東受影響資產')}
            >
              遠東受影響資產
            </button>
          </div>
        )}
        
        {activeTab === '牛棚備戰' && (
          <div className="col-span-4 bg-white rounded-md p-2 mb-2 flex space-x-4">
            <button 
              className={`px-4 py-1 rounded ${activeSubTab === '整體趨勢' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveSubTab('整體趨勢')}
            >
              整體趨勢
            </button>
            <button 
              className={`px-4 py-1 rounded ${activeSubTab === '釣魚郵件' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveSubTab('釣魚郵件')}
            >
              釣魚郵件
            </button>
            <button 
              className={`px-4 py-1 rounded ${activeSubTab === '公司風險履歷表' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveSubTab('公司風險履歷表')}
            >
              公司風險履歷表
            </button>
          </div>
        )}
        
        {activeTab === '捕手視角' && (
          <div className="col-span-4 bg-white rounded-md p-2 mb-2 flex space-x-4">
            <button 
              className={`px-4 py-1 rounded ${activeSubTab === '攻擊Domain' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveSubTab('攻擊Domain')}
            >
              攻擊Domain
            </button>
            <button 
              className={`px-4 py-1 rounded ${activeSubTab === '威脅情報' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveSubTab('威脅情報')}
            >
              威脅情報
            </button>
          </div>
        )}
      {/* Content based on active tab and subTab */}
        {activeTab === '針對性守備' && activeSubTab === '本日重大資安新聞' && (
          <>
            {/* News Panel */}
            <div className="bg-white rounded-md overflow-hidden">
              <div className="bg-red-600 text-white p-2 font-bold text-center">
                熱門新聞
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <img src="/api/placeholder/300/150" alt="News" className="w-full h-32 object-cover mb-2" />
                  <h3 className="font-bold text-sm">紡織產業智慧化與低碳化人才需求趨勢與因應策略</h3>
                </div>
                <div className="mb-4">
                  <img src="/api/placeholder/300/150" alt="News" className="w-full h-32 object-cover mb-2" />
                  <h3 className="font-bold text-sm">資安大會今落幕 逾億AI應用受矚目</h3>
                </div>
                <div className="mb-4">
                  <img src="/api/placeholder/300/150" alt="News" className="w-full h-32 object-cover mb-2" />
                  <h3 className="font-bold text-sm">亞東銀採用IT系統新生產流程，導入軟水泥出低碳型智慧工廠</h3>
                </div>
              </div>
              <div className="p-2 text-center text-blue-900 flex justify-center items-center">
                查看更多 <ChevronDown size={16} />
              </div>
            </div>

            {/* Today's Security News */}
            <div className="bg-white rounded-md overflow-hidden">
              <div className="bg-gray-200 text-gray-800 p-2 font-bold text-center">
                本日重大資安新聞
              </div>
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-red-600 font-bold text-xl inline-block px-2 py-1 bg-gray-200 rounded-full mb-2">1</div>
                  <img src="/api/placeholder/300/150" alt="Factory" className="w-full h-32 object-cover mb-2" />
                  <h3 className="font-bold text-sm">紡織產業智慧化與低碳化人才需求趨勢與因應策略</h3>
                </div>
                <div className="mb-6">
                  <div className="text-red-600 font-bold text-xl inline-block px-2 py-1 bg-gray-200 rounded-full mb-2">2</div>
                  <img src="/api/placeholder/300/150" alt="Security" className="w-full h-32 object-cover mb-2" />
                  <h3 className="font-bold text-sm">ESG和數位轉型並重，7成一般製造業者已經是轉型領先者</h3>
                </div>
              </div>
              <div className="p-2 text-center text-blue-900 flex justify-center items-center">
                查看更多 <ChevronDown size={16} />
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-blue-900 rounded-md overflow-hidden text-white p-4">
              <div className="border-2 border-red-500 rounded-full text-center py-1 mb-4">
                <h3 className="font-bold">AI應對建議</h3>
              </div>
              <ul className="space-y-4">
                <li>• 數位化與智慧製造能力建設</li>
                <li>• 供應鏈多元化與風險分散</li>
                <li>• 低碳化生產技術與環境管理</li>
                <li>• 強化智慧製造與低碳轉型</li>
                <li>• 跨界人才培養與國際化視野</li>
                <li>• 加強國際合作與市場拓展</li>
                <li>• 持續學習與職業生涯規劃支持</li>
              </ul>
              <div className="mt-6 bg-blue-800 p-2 rounded-md">
                <p>➤ 這些建議可以幫助企業在面對智慧化和低碳化趨勢時，有效調整人才結構和發展策略，以保持競爭力和持續成長。</p>
              </div>
            </div>

            {/* Chatbot */}
            <div className="bg-blue-900 rounded-md overflow-hidden text-white p-4 flex flex-col">
              <div className="flex-grow text-right">
                <div className="inline-block bg-white text-blue-900 p-2 rounded-lg mb-2">
                  <Bot size={24} className="inline-block mr-2" />
                  可以詢問我任何問題！
                </div>
              </div>
              <div className="mt-auto">
                <div className="bg-gray-200 text-gray-400 p-2 rounded-lg h-32">
                  
                </div>
                <div className="flex justify-between mt-2">
                  <button className="bg-gray-200 text-blue-900 rounded-full p-1">
                    <Plus size={24} />
                  </button>
                  <button className="bg-gray-200 text-blue-900 rounded-full p-1">
                    <ArrowDown size={24} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === '針對性守備' && activeSubTab === '今日新增CVE' && (
          <>
            <div className="bg-white rounded-md overflow-hidden col-span-4">
              <div className="bg-blue-900 text-white p-2 font-bold flex items-center">
                <div className="font-bold">今日新增CVE</div>
              </div>
              <div className="p-4 grid grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-gray-400 p-3 mb-3 rounded-md">
                  <div className="font-mono">CVE 1234-5678</div>
                  <div className="text-right text-gray-500 text-sm">2025.04.14</div>
                  <div className="mt-2">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Windows</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs ml-2">Critical</span>
                  </div>
                  <p className="mt-2 text-sm">Microsoft Windows中的遠程代碼執行漏洞，允許未經身份驗證的攻擊者通過網絡發送特製請求執行任意代碼。</p>
                </div>
                <div className="border-2 border-dashed border-gray-400 p-3 mb-3 rounded-md">
                  <div className="font-mono">CVE 8765-4321</div>
                  <div className="text-right text-gray-500 text-sm">2025.04.14</div>
                  <div className="mt-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Apache</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs ml-2">High</span>
                  </div>
                  <p className="mt-2 text-sm">Apache HTTP Server中的緩衝區溢出漏洞，可能導致遠程攻擊者執行任意代碼或導致伺服器崩潰。</p>
                </div>
                <div className="border-2 border-dashed border-gray-400 p-3 mb-3 rounded-md">
                  <div className="font-mono">CVE 1872-3654</div>
                  <div className="text-right text-gray-500 text-sm">2025.04.14</div>
                  <div className="mt-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Linux</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs ml-2">Medium</span>
                  </div>
                  <p className="mt-2 text-sm">Linux內核中的權限提升漏洞，允許本地攻擊者通過特製應用程序獲取提升的系統權限。</p>
                </div>
                <div className="border-2 border-gray-200 p-3 mb-3 rounded-md flex items-center justify-center text-blue-900">
                  <div className="text-center">
                    <Plus size={40} className="mx-auto mb-2" />
                    <div>查看更多CVE</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === '針對性守備' && activeSubTab === 'CVE一覽表' && (
          <>
            <div className="bg-white rounded-md overflow-hidden col-span-4">
              <div className="bg-blue-900 text-white p-2 font-bold">
                CVE一覽表
              </div>
              <div className="p-4">
                <div className="mb-4 flex justify-between">
                  <div className="w-1/2">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="搜尋CVE..." 
                        className="w-full p-2 border rounded pl-10"
                      />
                      <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <select className="border p-2 rounded">
                      <option>按嚴重性</option>
                      <option>高</option>
                      <option>中</option>
                      <option>低</option>
                    </select>
                    <select className="border p-2 rounded">
                      <option>按日期</option>
                      <option>最新</option>
                      <option>最舊</option>
                    </select>
                  </div>
                </div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 text-left">CVE編號</th>
                      <th className="border p-2 text-left">發布日期</th>
                      <th className="border p-2 text-left">影響系統</th>
                      <th className="border p-2 text-left">嚴重性</th>
                      <th className="border p-2 text-left">狀態</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">CVE-1234-5678</td>
                      <td className="border p-2">2025.04.14</td>
                      <td className="border p-2">Windows</td>
                      <td className="border p-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">高</span></td>
                      <td className="border p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">待處理</span></td>
                    </tr>
                    <tr>
                      <td className="border p-2">CVE-8765-4321</td>
                      <td className="border p-2">2025.04.14</td>
                      <td className="border p-2">Apache</td>
                      <td className="border p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">中</span></td>
                      <td className="border p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">已修補</span></td>
                    </tr>
                    <tr>
                      <td className="border p-2">CVE-1872-3654</td>
                      <td className="border p-2">2025.04.14</td>
                      <td className="border p-2">Linux</td>
                      <td className="border p-2"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">低</span></td>
                      <td className="border p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">已修補</span></td>
                    </tr>
                    <tr>
                      <td className="border p-2">CVE-2345-6789</td>
                      <td className="border p-2">2025.04.13</td>
                      <td className="border p-2">Oracle</td>
                      <td className="border p-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">高</span></td>
                      <td className="border p-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">未處理</span></td>
                    </tr>
                    <tr>
                      <td className="border p-2">CVE-9876-5432</td>
                      <td className="border p-2">2025.04.13</td>
                      <td className="border p-2">iOS</td>
                      <td className="border p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">中</span></td>
                      <td className="border p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">已修補</span></td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <span className="text-gray-600">顯示 1 至 5 筆，共 24 筆</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="border px-3 py-1 rounded disabled:text-gray-400" disabled>上一頁</button>
                    <button className="bg-blue-900 text-white px-3 py-1 rounded">1</button>
                    <button className="border px-3 py-1 rounded">2</button>
                    <button className="border px-3 py-1 rounded">3</button>
                    <button className="border px-3 py-1 rounded">下一頁</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === '外野不漏接' && (
          <>
            <div className="bg-white rounded-md overflow-hidden col-span-4">
              <div className="bg-blue-900 text-white p-2 font-bold">
                {activeSubTab}
              </div>
              <div className="p-4">
                <div className="flex justify-center items-center h-64">
                  <div className="text-center">
                    <div className="text-blue-900 font-bold text-xl mb-2">外野不漏接 - {activeSubTab}</div>
                    <div className="text-gray-600">點擊上方導航欄查看詳細內容</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === '牛棚備戰' && (
          <>
            <div className="bg-white rounded-md overflow-hidden col-span-4">
              <div className="bg-blue-900 text-white p-2 font-bold">
                {activeSubTab}
              </div>
              <div className="p-4">
                <div className="flex justify-center items-center h-64">
                  <div className="text-center">
                    <div className="text-blue-900 font-bold text-xl mb-2">牛棚備戰 - {activeSubTab}</div>
                    <div className="text-gray-600">點擊上方導航欄查看詳細內容</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === '捕手視角' && activeSubTab === '攻擊Domain' && (
          <>
            <div className="bg-white rounded-md overflow-hidden col-span-4">
              <div className="bg-blue-900 text-white p-2 font-bold flex justify-between items-center">
                <div>DNSTWIST - 可能發動攻擊Domain</div>
                <div className="text-sm">更新時間: 2025-04-15</div>
              </div>
              <div className="p-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 text-left w-12">#</th>
                      <th className="border p-2 text-left">風險Domain</th>
                      <th className="border p-2 text-left">IP地址</th>
                      <th className="border p-2 text-left">註冊商</th>
                      <th className="border p-2 text-left">註冊日</th>
                      <th className="border p-2 text-left">更新日</th>
                      <th className="border p-2 text-left">風險等級</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-red-50">
                      <td className="border p-2">
                        <input type="checkbox" checked />
                      </td>
                      <td className="border p-2 font-medium">fench.com</td>
                      <td className="border p-2">13.248.169.48 (USA)</td>
                      <td className="border p-2">nsl.namefind.com</td>
                      <td className="border p-2">2025-04-13</td>
                      <td className="border p-2">2025-04-15</td>
                      <td className="border p-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">高</span></td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <input type="checkbox" />
                      </td>
                      <td className="border p-2">fenck.com</td>
                      <td className="border p-2">13.248.169.48 (USA)</td>
                      <td className="border p-2">nsl.namefind.com</td>
                      <td className="border p-2">2025-04-13</td>
                      <td className="border p-2">2025-04-15</td>
                      <td className="border p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">中</span></td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <input type="checkbox" />
                      </td>
                      <td className="border p-2">fency.com</td>
                      <td className="border p-2">13.248.169.48 (USA)</td>
                      <td className="border p-2">nsl.namefind.com</td>
                      <td className="border p-2">2025-03-14</td>
                      <td className="border p-2">2025-04-10</td>
                      <td className="border p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">中</span></td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <input type="checkbox" />
                      </td>
                      <td className="border p-2">fence.com</td>
                      <td className="border p-2">13.248.243.5 (USA)</td>
                      <td className="border p-2">ns29.domaincontrol.com</td>
                      <td className="border p-2">2025-04-14</td>
                      <td className="border p-2">2025-04-15</td>
                      <td className="border p-2"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">低</span></td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="mt-6 flex justify-between">
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-md flex items-center">
                      <span className="text-red-800 font-bold mr-2">⚠️</span>
                      <span className="text-red-800">可能發動攻擊Domain筆數: 4</span>
                    </div>
                  </div>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-md flex items-center">
                    通知窗口 <span className="ml-2">📧</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === '捕手視角' && activeSubTab === '威脅情報' && (
          <>
            <div className="bg-white rounded-md overflow-hidden col-span-4">
              <div className="bg-blue-900 text-white p-2 font-bold">
                威脅情報
              </div>
              <div className="p-4">
                <div className="flex justify-center items-center h-64">
                  <div className="text-center">
                    <div className="text-blue-900 font-bold text-xl mb-2">威脅情報面板</div>
                    <div className="text-gray-600">更多威脅情報即將推出</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === '球探情資' && (
          <>
            <div className="bg-white rounded-md overflow-hidden col-span-4">
              <div className="bg-blue-900 text-white p-2 font-bold">
                球探情資
              </div>
              <div className="p-4">
                <div className="flex justify-center items-center h-64">
                  <div className="text-center">
                    <div className="text-blue-900 font-bold text-xl mb-2">球探情資儀表板</div>
                    <div className="text-gray-600">正在收集最新的安全情報資訊</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-blue-900 text-white p-4 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white">聯絡我們</a>
          <span>|</span>
          <a href="#" className="text-white">API文件</a>
          <span>|</span>
          <a href="#" className="text-white">系統公告</a>
          <span>|</span>
          <a href="#" className="text-white">隱私與資安政策</a>
        </div>
      </footer>
    </div>
  );
};

// Metric Box Component
const MetricBox = ({ number, unit, label, onClick, clickable = false }) => (
  <div 
    className={`border border-gray-300 p-4 flex flex-col items-center justify-center text-center w-48 ${clickable ? 'cursor-pointer hover:bg-gray-50 transition-colors' : ''}`}
    onClick={onClick}
  >
    <div className="text-4xl font-bold text-red-600 mb-2 flex items-end">
      {number} <span className="text-lg text-gray-500 ml-1">{unit}</span>
    </div>
    <div className="text-sm text-gray-700">{label}</div>
    {clickable && <div className="text-xs text-blue-600 mt-1">點擊查看詳情</div>}
  </div>
);

// Tab Button Component
const TabButton = ({ label, active, onClick }) => (
  <button
    className={`px-4 py-2 flex-1 flex items-center justify-center ${
      active ? 'bg-white text-blue-900' : 'text-white hover:bg-blue-800 transition-colors'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default CatcherAIDashboard;
