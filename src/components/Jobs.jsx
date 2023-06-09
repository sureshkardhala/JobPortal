import React from "react";
import FullScreenDialog from "./FullScreenDailog";

const Jobs = () => {
  const image =
    "iVBORw0KGgoAAAANSUhEUgAAAS0AAACnCAMAAABzYfrWAAABiVBMVEX///8TOYT///38//////v///r5/////v8TOIb//f8TOYL3///9/v////j9//z0///m7vP/+v8VNI0NLmsTOIkAJ24MOoX8//MSOn8AI20AKGsfUoX6//j0/f8AJWoAK2uWp8FCd6QALXYAI3MJM33S4OiLnrgwVX/E4uiOnKmxsca/v8osUH+nuc/Z5fUAK2QALHm3x9cAJmZAW4fr8//Y5OZid5cGNG6uwdlNbYk8ZIydqLlqgJYnUIZ1nLO71uUzSm+KjpTL1eyxu9h6katJXoRSZpBjd6B0iK6LnbucqcUqQnC/x9wbOGoNPH1OYYQAL2EAGFBzepFYZ40rRX1TXXCmt8RLY315j6FIXJDU3vGhtdAAGmGOj6CeprA1SGQAHkgKMl0VM5J/lbtffrUAGGfOzdK9xscNRX/p4egQPmlvh5opV5VchKPW7vOOqLjm4terx9AxPmAkTms9a6A/TXorTZNecX84bJs8bJCdnLkmWqNvl64YV35BbH1laY2DqNBBU2V7m6eWurzdAAAYeUlEQVR4nO2dj1vTyLrHpzOTpGkykxQKKSShWJvGaoDWloKU2K6ngIr82JVTXXE9PzwXdYX2cJE9yzly99z9y+87KSoq7OG5z73rHpqvPkCTNJ188r7vvDOZmSIU68Ka/dIFiBUrVqxYsWLFihUrVqxYsWLFihUrVqxYsWL9OsKnpEd6t0dPq6oO+xXQlyzhb0kRJkQI4VhBlFlMopSyE2FVhZ2IfOlC/mYU0SIy4Y6DKZWk93AAIEGKiiXHcfgXLuRvRhEtiVGJc9mo3fndZLteX6pWq8srd+9NVaZdpHNqsQ/+OdiKaDGK3OmpdnVm7Go+ny/0VS6P3ZxZXbl/x4XDlEHHFQUsRaGME+1JcWlmolxIjCYzQskUKJFMwqvCyM3Vuw9coisK1qM3felyfxlhziEuqZS7U8vD4wAnFTH6RMlEolAeOSxOI5UiVXegEhhMXrquqipx769OFLIJMCNA9TmtaEsyNbLW9ogMlQDAGkhaGFIEzZhfHSmksmcY1QdayUwilcnk5+7VZA515GDaFmYS6d4ag2CVykY6hxeEr9R6IjM0lAsqmiyxwbQtlNYfrOUSqewohPX3+pSV2AfBC1hmkqPDRcORBo4WXDCmEro/lhSuduKFyag+HE2B4yUS2dHUemoUdiU/kEylsjdXXE4VNFjpBOQBHJPi16kTe4pcMQW/C4VsNp+BOAXBqlwuA6ns+rrYB0CTQ6CrGzWZ0cFqCimYEq04AbE78jRIRK+CZmbWVv1HD5dXx8H1hqvLy9XDtc1xsaucy6aEy4JH5pcNPmBxHmhpUzNJ8Lbh8fHc3Fb9dXGq8mS65mqaIctGMZ/JzxsGkV3ZrT258+D+vZXlreGJkXwZ2OYWDX2waGGJe5v58eG1pcVexasZGuGi30GSGLPSqtPMFdZdi4Jw1B1BKdIA23xx5XB4JPd1gwxWDw5m/JuHxSmvpskihimUc/glumosJqV5c7iwVdPTaUKi/ghMLZBgRjTzznb796aqIAIvB0RpzCDTpBLlyEGEuKbpgcNVpjqVac1SSTOXWXXTimJ4v5uqVCpNb3radDUZyGEkYaKnVagl+MC4YzptMWglyuaTB/fvLle31nMTI2NjI6DcFFfRk1wmdNNcfjwzdhW2jUNs2wqW6u1G5UlNIzICD+VcV7/0Vfxa4rLrVe6trK6PjIg8IUqpos6HzFDLVdmTEaCl8umbicRJn0S2kCyX8/mRkezhSrEy64JhDg4trbM5PF4uCERRm0ekp5BiJSAXvWkq1pP8UGiovHI1I3bBUZDNQ8unz7OcH5+py0SiA5OiyneHkomMSNWzfduJaMHrRGauBraVHwoMxfGAFqT6o6L5E3V5RR04QHhoGDJ6NjBxiyxBAp+JEvTTzWdgUniEVDxdSFY1yallE+snDZ+TJuM7sCOzVnpw+url1cR5tB4rglahakjc+LaQPd3M/tDuHvMsdXBoaWfSAuNJjHQUnU4XylVXkuS7+cRnfRLvaUlf+iJ+NZHqGZ6YEs3GCY/q3MtHtPjkSOaz7mdBKzUiaA1OQr9SPoMWRPzUepcRPp0TtBhrnkOrkKsNFK375dFE5ox+0uy3sqNKnohbVGLmWvKzg1LZZKawEbWXvvRF/FqSnowlPg9JoNxd9J4WZ261cAatTGZ8Eg1SN4SlfVtIfP54J5m8OUU+0JLIYv4MpJlMbnqgek8Zn59IffrUQvQq3/QiWvkog6BkMnfGo6BkuU5E/8PAWFdaMh7mPqMFPrbq8j4tH2yLkubM5waYTeWeMJHIDw4tanlziXetmfcgMuUV7YRW4DJdtWpbpx8E9dveqZv3CRso21Ip07bHo+cXH9O6hzBTqJdPhhEtd7lwClc0NCIzXh+4nmaspo3ixEftGhG3xh5wzFRBawtoIYs8z5+ilc2OjiZyyzWMBynG92lxuT3zcehKJddMjJgiPHGrxgiRSCWX/KhVncgv1RTGB+sJmXj2KlG3sZn9qOVT3jBUJbKtiBbHtLuWeA8rOZRJDa+YnA9Oe7ovBTPGsWNU1vIRpz6t0XKRqyrQaoIn1hh3FMnYKIg+m/5Byexm0WWOLA9Ol/wHKYpsdOsT0XPV/tC2iYqFI1rl5DrQ4gol7VxmKBk9eE0VJloVog5Me+cTKSrnrlFZuhm5o+jcmjMdRdCqXE3O9WlpELgy4KPZbHZ8uFgzyMAOBld0zhgj7tThWCE1CiE8/1CjVGcqBlrD0wxzxDVzLZEZhbpzfLM9TRxHGkAfPJGuUImJAbqV+ubMeio53oCAhiJa0BSkmCLuaA8Lyezc+NakiRxJGtCRbkKKoqqqrophuprZ2Ngcf9rEqqBF5yNauqBFJp9OrLYfuJgySnR9cBL484QplqAlY974zkRUIlhVrn9dGJt2VJGX6d4zzyUED+xY5jNEKdZVFalADmihG4+qy7MsiueqmJIhD1g2+i8kLEdXowkXBFEuG4bLrWiPruuDNOThYopwnIztBjrRTJY+otgFzxHuT8+AuhJL7MPGARVUfuYZksGmuPvuFZa4rqhnHcc4VeT3b1KVS95cVJj8h5nhT/VHD6mYLM5sbg7P5W7WEXN07P1xc/NPm6cOgre10roEO3LDMzMzw3+chaT/S1/P/6ugpaO1Cifdxe+USs54kJPW1grJpJiSMVfjTEdPZuDP0dR7ibak76YpadwUh2WTucZld1HMLMMvnAz5fqdEZsZjFqtMpDJDCUA08UCG7H56WIzb+ujRRcE30tjYiCYbpDLlDVm63OO3IlqZoU8kaDHSLmezQ38WO+/KFkPenKB1+rA/D4UuladnkuJP2Dds8svdgaoojnEYGRB4VvRPzBoYynlIN7aGUuuZJLwurLpAa3oOWtmjwlPXs/2f4ImGpU3djCZQZddTY1OyfqlzC+xQd/Xq1Vzual6MA4TgNSymDjz1GGnmkqlUMpvJrmduNqmCnnw9nC+PjBRGs+vrqdHx8XxufGK1xrR6OZEdWs9m1hPlutafhH1pxRlp3L8/OTkpnk1AJLoLf8JLk6FiPpNIFf4C1pbJFQkmZmNSaKUgnvOsP5+c7E1ONhxmzmWSqcybb5PZZHLVZJedltW/PG8CTCs5UulvVqi2VM5kUsN3tlLJRLbqch6Nk8doMi/GAs7VIGuFhrUlVSagRiwX75WzmUSuwqVLPZ1MdP4xS7Ksd7SoFa36wL3hVCpTqBobBTCx8WmHIyoxy6IRrdSmGU0ukCxytwy141ilMgYJRf6ufKltC0tYh0gvM8sbi2jNIzAOlVvy5Pj6eqb8HBXLQ6nE2CRkXCqijoPvl4FedtNkFDMlTd31IQjyw6Y5DnE/serSy0yrn0/q4sn9mHiMc3WeqxyrmkOWC2AswxVSGc8kkuVlA0epFBeemEiNzpk06qPQ74wl15OZR0ReAocdzd3BjOuXvDNVtVT6jpakwvXK3JwT88w3TV6bE6nrXLc/6ymKW4AlogWYoS5IZJPlxwg9LidTo7kigndfavP6mBZVGdY5mRpPivF+hiMvFyCq56ZIv+fmFC3YQtwAsi6IdqpeGQG8UXWgXvKur89oSaSeh8w9XyQSKo5DVM+tyNF45VO0OKFY9nJiEOWamVbM4UQyk8p5Glaly90T8SktzGpbopkzVoFYXsllMtnUek10L+gfaEmESJg08tnMUOGhllY1sMFMIt+QFZUOAK0R8bw1iluqyirjYkDIXI1jbK4NQXvn5j5XdYIpmoQ6MZuYM7GuY6ptFMC2wAQVSu6JudcAjqmXvCtC0Jrt0/qdpLB0mrfLhawIWxyC+0PRli63SZrInGGwrZSgxTiWpOmZQiqZzFUQk8iDiVQylRjuwrkGgNaYmLET0aKq2xIv8j1u6Qr4HkSkwmpNJYQKWsmIlshO5amJTDKTWKsRiZLaZlaMe+sA0ss9AxZoQb6VgYu9Os9UR9KaM4LW0ztgS5g3b2az0Nq+Q4gu1osQ+VZy2MRAzqhD6yhTWNbE6gjyRlYsn1TX9Es+LAJoMe9pLjece1oBWrr2+Ovc+Pj4Zk1NY+qYf7o6Vi7/R1uG6MTQ5NP8yMz4jKmCzD+N5XL5p0UC4Y2T0tNxOMOfaviSj7kRtmUWI3mWKuu8E3VEdGSqggm5U6KTotGRdRVCVaV47x4cZ1J4NfsMdty/PwuwFEy9yei4WYteblpCSn9RwKg++7gHVD/9m5DPd3wc1AdjxTdC+rgucNSvUZzfvC5S8cekYv0vdCEf+2hl3VixYsWKFStWrFixYsWKFStWrFixYsWKFStWrFixYsWKFStWrFixYsWKFSsSEZNrHMeROCKYE5lTsfAVV9NMbJQwbOSymHGDiZgo1/+qhbSKxcIzRCYXmxWhcqYQRcz8vdhaIaqKiK5zy7Kocu5wb6Kjf73cPGZQUkoxSSuWmJRwurxiGTRxFfrpUimcq5hyTtQzpjCI4Xq6khaiEpUY4RIhjDpKmimqmk6rYiOVJQ7/Jayd0CJi/q+YWXLBOSQqA1qYShhfbBaFqhNC1bQowPkrLGKJMelfnQ+LuYwAi6SxI75UkJzeFZ2AUuX0t5upsqyCgTB0Lq13f8J5OQbbQpzhd1YjxmxTXSIyIkySo1XL4XMIHK0R+LALXbworphvQi+6IC6Bmya+uycae3neHaEM9v+yrZ6sTyXBgRgZmkxPf2Uljt7/aanE9Bm4aIbP+n6XCNaLHqgI/zuarqJOr2FgrpmlXqRiydRV1SuVZvm702JqNvbqr/fdi66TxXZKHWLpNfeCa4UQuO/E7C3WX3dqmnTOZAJFLRW9X/x8KN1O6RkEF64T9qLUkRk7fbfUTrFCHN105FOlokSXbsB2RT3jxkZ379nL8GUY+nawaGDFbNlBN020V/2Ngf19V1PRYmAXNf7utDutIPD9oO5e0LPw9dU9jd2oXpPTFzoeIg0xl0KhuiGzs2lh9P33TfkXzqJA6W4EtwwC1sOt0tpr7WNaaHGtpzmNJUM/VSoLY+m7raKsnkULCdvyOp2O7/empiqE40Zg7/YQJ+lOp7Lo781PdUwHm4f27oIhYh+SZMkM/HZz9j4AlKUTawPXfVfG/voPhHPMwNKFG0j4enDFwK0QaPWHNeuRvUTTMng/VMvRF7IpGM6ji7lSpBTUm7MV397W+l+nBU7DT3xLpki8h1f2u47wF7jjXFX7RxHWXxhIBUcVtOwrhigItrz5JkRdApUZ6kc7yitT18jsVrUrp/smGpUZfpe2bmtn2lYkeDPz7WuIQ4zTNsK98MiAE8LWkn0bQXVCSCfcqwbwaYqKLcMq7u4ZUO6Gf8tgyCzVF7e7DjOLpW5j8WdPtdxOe3GxZ8rqX3tFR3FKt2fRdf+KVvL95x2a7izW93qmhJ+VvBeL9YrmSHrl9Uq7ycH1XYV4vUbasYDhN+E2ktB3/iKR3M7iXtGDjyg1vMU2vBGqQ/hJGz3P4bXG4l6va6gqFGSv42KrVnpdb3cMMTeIgW1d0Tn8VtiL3j56VeqZxXrJ9dr1oknx9WfN2fYP1V5TIfuL9cee5jCtU1/cv7d1D4LXeU4uQQgWtBxdJZ5/1G35TTB/JmOgRbiW5u4tu/nYbxsSVoCW+jDc15iEXVOWMTil79tHXdlctY98/9ivWe3AXvDtN256Z/WloburdlPQMv5zYeFlHX0Hx9vhnkE2wisHvm03Zdxo7S4EYYVvvGxqqPHyOUQOMIFG4N/2XCgdI4vwlt1wGpmr4YL9pvh9WyZmqzWNtoImSm9AtAiqNcs7hLOFd3XzMDiugqdo9IQWAVoc4VK4p3mtKuwK/iICTFtGK8H2zuruwvc9Wgp9fxfMATUg+LTe/KP4C7Qopye00vix30Nf2W/B/D/Qwjv+kfHC97sSmLllpKt2E/ZLUP1idcO/bZi3/NuaGdptY9qHqz7cbaLaxo9NtBPsGop+GEa0tFl/t2K6i4+m0c6u3cUPw4WucRTehguH0/W2lsn9H25r6Uc/NC1wa10xNwLbDvaahvwiWOiSvwd7xAx2jzpTpm8buOPvERTCfXgWXOm6Gy8b6G+7UBAA/iL8sYsqS3XXQqdpoeLuczCF3W2t4+9OylP+gkHvhtv8xg8/XnOBWZNcD480sxVuGxU//GVa723LDOwu2gn9LtNPaElaGn0X9hBZtqcgl8CWlq5CAGIQiTnBO8GPBrN2ggXDDAKPoY1wnhz6R70dFzlY0JLe0ZKZv3sNq0juVh5/G3alh8E2YqWwjTpwQYpqGtKrwwXjr3AVlgPVeBq5nTpYi92TH/v/NKRa4JumHzaxLN2y99Hv7SYlh2Bb39hTzDJNF66zS8A0bl9b9Reve4ZImz7QgtS4AR8FN6zLPLjt1o6/0JXq9jba+eFHB/09fA7Zd2h3d4KqYUGV9kue+IEW6vzwpjdZrNoVKNV7Wqb/j7eNxoq9J0MGYGlsw96H8K7MVgxRGsPi0+Fx9xVwtvBP4T56cAAXCYYG1H8wuCtMTdBSD46bRLqx8X3gAy380J6nVmm3jRpwXjVN02nyt7D5LOyRtKxCJQNRFLne612/9tr/sX7rx/ClB7fS4zKbCt52W28MJgtaS2GTycSyXgULV+r1aliHS/d9f6njsg+0oLC0Yb9Fng9ve2IvdPGrcMFFK+E22dk9ciE6/teth/VDu/kCbr6F2vY9cn5lT7kkaAEgZQN8P7T96p4hMS5FnohZJ4SNoV8NromT6OgrEcI41AFHGniJwfgre8F9tXXcpeQnYIDIjeKCH/ws74SBQdPH//DQ9XBFs/xjT59d9XueFwpaP8wjNBnZ1p4G1YdO0fXgn3u2J/IkKs0uBR63mBzY117bz6eggu6Yabj7ks6coPpPu0fUyLY2/H3KmCu/atnbnan5yj5BZufto+rLJhPZ4A37lgFxRlegTnorewe7LvO2PqIVCFr23n6nc6Nj7oRg2rQNnsjweYvugW1RP7xGCfaOjyGb6PT84y5nGkTG2xrV1VvHb8XWWyJ0iuPBlnumuw0/o6CD0D17D5nBcZc5P9kV83G9C2Ei3EM7cBp553jXkzpgP44IMy92F2RUCaO4Nc9Yz25D8gbO7x08MqnpV6tHBhcroEr6I7/tEm3K9rvPACfaaRdF5tLFOpOgGrGvyZQHfhPM4i04oP9aboHDo9Jbr/K6KCNjyd6XIlpQbxuG5hpI2NbOwRvDmoUwCO54ZNB60OM7WwsGehFAJe+1IfAFUEZ3aff2L9CSONeBFuQ1bf+tJhocGwCCaUjQYgDnuAuJBJoKjox+otiBTDawgzpcWSmoFtuB70W0iPPTbgVi11GvJAKYfmBfKS4thB4CWoQd2nv3PEjVigfVoIs2wAqpoKXWg6PireM9g6LX1d2eJkEzF5o7kAEu1JcD/7W4I/V71ZfbVNASeZcXQBblMOIfNzHY1N1iaO+TBhTkbhia3oG/2FiE2NS3rRBKGgSrP0NIi2iBbUHIgms6cnHd7+HZ0H7ecZf8+uRGcJvoi/ZC8VFVuBQ6r4Eq4tYfWh4j5n9D7gAtdtRoPapRDX/VegyZ3VcHe4YiYbXWavXXGsPMay/4t7ZdaKHoPT/wHzVl3WwdeLoGtiWZ3wTgtz3DwlNh0Jr/rxbErVadsL+3oDZ7FoT+fv1gnzxqgSeWWo8RMutwRfUaobQShB60r1RMOCWdBYg/fs/FyNsIQhuSMUgbPMQlVb/V6hgOdlsHTYVWFmzbn9SY3oA0402T0J1H0NA4ErW2oBVUqyJr+JmUwAi9gwVXgR814v3hkYm+OZhEzqK/ehe9eghI29CSM+t+q9g+KIF1nBe5KOGWIYMxcSzrcGepoxCNU82SoNnBNYiiri4WHEBav6GBHU00q+EYsQK8OzurcRGWDc4cZBiWpsMmseK5imqzrqYRR8ZEoxYyZ2vww3NlpIGRyhD74DRpzmGHaYgeggqkZaJ1gmWxpCcxPUi4KNewNjtrykziMlREDk/DCWRLIg5k9YrD9FnPJQzqH/hU2dIlLJuzXUNSdKCVPpkUqcFpDU1VNYIx02QFjtawpCBohIq3W2Aos12CKaFk1iSyLEv0XFoYrEV0QOj9RZwgyGIMqTCh4H64Dxm2iu95P2lFw2bR1SEWyMKURm/QFTiAQgEINIZgo2jPqNCQURTIzMQBlIs1QkRLCUdfag4nFj+gscMVcVrOvcqCPwWfE30C7n9ZoljGmYhWlaKq4pMkqCoVImbwi3JJonTRF25huMsKwtGZRN0vGrDRAl6ilFFXkYROXop+FlEE+CDxVQmquHravwysR++jVCzx9Rtf0OSr74Nb7pcuxL+NZjsVN54kfEH1l5v/0qX4dxGEC3rJVz/6v5SoG+LlIGLFihUrVqxYsWLFihUrVqxYsWLFivVl9T9kmGY6UbjNwQAAAABJRU5ErkJggg==";
  return (
    <div className="w-full h-fit px-2 md:px-32 mt-2 flex flex-col space-y-4 py-20">
      <div className="w-full text-center my-4">
        <h1 className="text-xl font-semibold">Latest Jobs</h1>

      </div>
        <div className="w-full md:w-2/3 h-fit py-4 px-2 shadow-gray-300 shadow-lg rounded-2xl flex flex-wrap justify-center mt-4">
          <div className="w-56 h-40">
            <img
              src={`data:image;base64,${image}`}
              alt=""
              className="w-full h-full object-fill rounded-2xl border-[1px]"
            />
          </div>
          <div className="w-full md:w-2/3 h-fit flex flex-col justify-center px-4 space-y-2 font-semibold">
            <p>Software Test Automation Engineer || TCS</p>
            <p className="text-sm">
              Qualification:<span className=" font-normal"> BE / BTech</span>
            </p>
            <p className="text-sm">
              Batch:<span className=" font-normal"> 2022</span>
            </p>
            <p className="text-sm">
              Branch:<span className=" font-normal"> CSE</span>
            </p>
            <FullScreenDialog />
          </div>
        </div>
        <div className="w-full md:w-2/3 h-fit py-4 px-2 shadow-gray-300 shadow-lg rounded-2xl flex flex-wrap justify-center mt-4">
          <div className="w-56 h-40">
            <img
              src={`data:image;base64,${image}`}
              alt=""
              className="w-full h-full object-fill rounded-2xl border-[1px]"
            />
          </div>
          <div className="w-full md:w-2/3 h-fit flex flex-col justify-center px-4 space-y-2 font-semibold">
            <p>Software Test Automation Engineer || TCS</p>
            <p className="text-sm">
              Qualification:<span className=" font-normal"> BE / BTech</span>
            </p>
            <p className="text-sm">
              Batch:<span className=" font-normal"> 2022</span>
            </p>
            <p className="text-sm">
              Branch:<span className=" font-normal"> CSE</span>
            </p>
            <FullScreenDialog />
          </div>
        </div>
        <div className="w-full md:w-2/3 h-fit py-4 px-2 shadow-gray-300 shadow-lg rounded-2xl flex flex-wrap justify-center mt-4">
          <div className="w-56 h-40">
            <img
              src={`data:image;base64,${image}`}
              alt=""
              className="w-full h-full object-fill rounded-2xl border-[1px]"
            />
          </div>
          <div className="w-full md:w-2/3 h-fit flex flex-col justify-center px-4 space-y-2 font-semibold">
            <p>Software Test Automation Engineer || TCS</p>
            <p className="text-sm">
              Qualification:<span className=" font-normal"> BE / BTech</span>
            </p>
            <p className="text-sm">
              Batch:<span className=" font-normal"> 2022</span>
            </p>
            <p className="text-sm">
              Branch:<span className=" font-normal"> CSE</span>
            </p>
            <FullScreenDialog />
          </div>
        </div>

        
       
    </div>
  );
};

export default Jobs;
