const terms = [
    { term: "ABAC (Attribute-Based Access Control)", tag: "defense", def: "Modelo de controle de acesso que toma decisões por atributos de usuário, recurso e contexto." },
    { term: "Account Takeover (ATO)", tag: "social", def: "Comprometimento de conta legítima via roubo de credenciais, cookie de sessão ou bypass de MFA." },
    { term: "Active Directory (AD)", tag: "network", def: "Serviço de diretório da Microsoft para identidades e recursos em redes corporativas." },
    { term: "Active Reconnaissance", tag: "pentest", def: "Reconhecimento com interação direta no alvo, como varredura de portas e fingerprinting." },
    { term: "Adversary-in-the-Middle (AiTM)", tag: "pentest", def: "Interceptação moderna de sessão, incluindo proxy de autenticação e bypass de MFA." },
    { term: "API Gateway", tag: "web", def: "Camada de entrada para APIs com autenticação, roteamento, rate limiting e observabilidade." },
    { term: "API Security", tag: "web", def: "Práticas para proteger APIs contra abuso de autorização, injeções e exposição de dados." },
    { term: "ARP Poisoning", tag: "network", def: "Envenenamento de ARP para redirecionar tráfego local e facilitar MITM." },
    { term: "Asset Inventory", tag: "defense", def: "Catálogo de ativos de TI usado para visibilidade, risco e priorização de controles." },
    { term: "Attack Surface", tag: "pentest", def: "Conjunto de pontos de entrada exploráveis em sistemas, apps, APIs e usuários." },
    { term: "Attack Surface Management (ASM)", tag: "defense", def: "Descoberta e redução continua de exposições internas e externas." },
    { term: "Attack Vector", tag: "pentest", def: "Caminho usado para explorar um sistema e obter acesso não autorizado." },
    { term: "Authentication Bypass", tag: "pentest", def: "Falha que permite contornar autenticação sem credencial válida." },
    { term: "Backdoor", tag: "malware", def: "Mecanismo oculto para manter acesso persistente após comprometimento." },
    { term: "Banner Grabbing", tag: "pentest", def: "Coleta de versões e serviços por banners de protocolo." },
    { term: "BAS (Breach and Attack Simulation)", tag: "defense", def: "Simulação automatizada de TTPs para validar detecção e resposta." },
    { term: "Bind Shell", tag: "pentest", def: "Shell em que a vítima escuta uma porta para conexão do atacante." },
    { term: "BloodHound", tag: "pentest", def: "Análise de caminhos de ataque em Active Directory por grafos." },
    { term: "Blue Team", tag: "defense", def: "Equipe defensiva focada em monitoramento, detecção e resposta a incidentes." },
    { term: "Bootkit", tag: "malware", def: "Malware que compromete cadeia de boot para persistencia profunda." },
    { term: "Botnet", tag: "malware", def: "Rede de hosts comprometidos controlados para DDoS, spam e fraude." },
    { term: "Brand Impersonation", tag: "social", def: "Uso indevido de marca legítima para phishing e fraude." },
    { term: "Brute Force", tag: "pentest", def: "Tentativa sistemática de senhas/chaves ate obter acesso." },
    { term: "Buffer Overflow", tag: "pentest", def: "Sobrescrita de memoria por excesso de dados alem do limite do buffer." },
    { term: "Bug Bounty", tag: "pentest", def: "Programa de recompensa por reportes de vulnerabilidades válidas." },
    { term: "Bug Hunter", tag: "pentest", def: "Pesquisador que identifica e reporta vulnerabilidades em alvos autorizados." },
    { term: "Business Email Compromise (BEC)", tag: "social", def: "Fraude por e-mail falso/comprometido para induzir pagamento ou vazamento de dados." },
    { term: "C2 (Command and Control)", tag: "malware", def: "Infraestrutura de comunicação com sistemas comprometidos." },
    { term: "CAASM", tag: "defense", def: "Gestao de superfície de ataque orientada a ativos ciberneticos." },
    { term: "CAPTCHA Bypass", tag: "web", def: "Contorno de CAPTCHA por falha lógica, automacao ou serviços externos." },
    { term: "CASB (Cloud Access Security Broker)", tag: "defense", def: "Camada de controle entre usuários e serviços SaaS/cloud." },
    { term: "CERT/CSIRT", tag: "defense", def: "Equipe técnica responsável por coordenar resposta a incidentes." },
    { term: "Chain of Custody", tag: "forensics", def: "Rastreabilidade de evidência digital para validade jurídica e técnica." },
    { term: "CIA Triad", tag: "defense", def: "Modelo de segurança: confidencialidade, integridade e disponibilidade." },
    { term: "CISO", tag: "defense", def: "Executivo responsável pela estratégia de segurança e risco cibernético." },
    { term: "Clickjacking", tag: "web", def: "Engano de clique por sobreposição de elementos/frames invisíveis." },
    { term: "Cloud Security Posture Management (CSPM)", tag: "defense", def: "Detecção de misconfigurations e risco em ambientes cloud." },
    { term: "Clearnet (Surface Web)", tag: "web", def: "Parte indexada e pública da web acessível por buscadores tradicionais." },
    { term: "CNAPP", tag: "defense", def: "Plataforma que combina capacidades de segurança cloud-native." },
    { term: "Credential Harvesting", tag: "social", def: "Coleta em massa de credenciais por paginas falsas e engenharia social." },
    { term: "Credential Stuffing", tag: "pentest", def: "Uso de credenciais vazadas em serviços diferentes." },
    { term: "Cryptojacking", tag: "malware", def: "Uso não autorizado de recursos para mineracao de criptoativos." },
    { term: "CSRF (Cross-Site Request Forgery)", tag: "web", def: "Execução de acao indesejada no contexto autenticado da vítima." },
    { term: "CVE (Common Vulnerabilities and Exposures)", tag: "defense", def: "Identificador padrao de vulnerabilidades publicas." },
    { term: "CVSS", tag: "defense", def: "Sistema de pontuação de severidade de vulnerabilidades." },
    { term: "CWPP", tag: "defense", def: "Protecao de workloads em nuvem com foco em comportamento e runtime." },
    { term: "Cyber Espionage", tag: "defense", def: "Roubo silencioso de informação estrategica por longo prazo." },
    { term: "Cyber Hygiene", tag: "defense", def: "Práticas básicas de segurança feitas de forma recorrente." },
    { term: "Cyber Resilience", tag: "defense", def: "Capacidade de resistir e recuperar de incidentes mantendo operação." },
    { term: "Cybersquatting", tag: "social", def: "Registro abusivo de domínio similar a marca para fraude." },
    { term: "DAST", tag: "web", def: "Teste dinamico de segurança em aplicação em execução." },
    { term: "Data Breach", tag: "defense", def: "Exposição não autorizada de dados sensíveis." },
    { term: "Data Exfiltration", tag: "pentest", def: "Transferência não autorizada de dados para destino externo." },
    { term: "Data Leakage", tag: "defense", def: "Vazamento de dados por erro humano, processo ou configuração." },
    { term: "Data Loss Prevention (DLP)", tag: "defense", def: "Controles para prevenir perda e exfiltração de dados." },
    { term: "Data Poisoning", tag: "malware", def: "Manipulação de dados de treino para comprometer modelo de IA." },
    { term: "DCSync", tag: "pentest", def: "Técnica para extrair hashes do AD simulando replicação de domínio." },
    { term: "Dark Web", tag: "defense", def: "Subconjunto não indexado acessado por redes de anonimato como Tor." },
    { term: "Decompiler", tag: "forensics", def: "Ferramenta para converter binário em código de alto nível aproximado." },
    { term: "Deep Web", tag: "web", def: "Conteúdo não indexado por buscadores, como painéis e sistemas internos." },
    { term: "Defense in Depth", tag: "defense", def: "Múltiplas camadas de controle para reduzir impacto de falhas." },
    { term: "Detection Engineering", tag: "defense", def: "Criação e manutenção de detecções baseadas em comportamento e TTP." },
    { term: "DFIR", tag: "forensics", def: "Integração de forense digital e resposta a incidentes." },
    { term: "DKIM", tag: "defense", def: "Assinatura de e-mail para autenticidade e integridade da mensagem." },
    { term: "DNS Enumeration", tag: "pentest", def: "Coleta de registros DNS para mapeamento de alvo." },
    { term: "DNS Tunneling", tag: "pentest", def: "Tunelamento de dados/C2 por consultas DNS." },
    { term: "DoS / DDoS", tag: "network", def: "Ataques de indisponibilidade por sobrecarga de recurso." },
    { term: "Domain Fronting", tag: "pentest", def: "Mascara destino real de tráfego usando infraestrutura intermediaria." },
    { term: "Doxxing", tag: "social", def: "Exposição pública de dados pessoais sem consentimento." },
    { term: "Drive-by Download", tag: "web", def: "Download/infeccao automatica ao visitar pagina comprometida." },
    { term: "Dropper", tag: "malware", def: "Malware de estágio inicial que instala payload secundario." },
    { term: "DREAD", tag: "defense", def: "Metodo de avaliação de risco por cinco fatores de impacto/exploração." },
    { term: "EASM", tag: "defense", def: "Gestao da superfície de ataque externa exposta na internet." },
    { term: "EDR", tag: "defense", def: "Detecção e resposta em endpoint com telemetria e acao rapida." },
    { term: "Email Spoofing", tag: "social", def: "Falsificacao de remetente em mensagens de e-mail." },
    { term: "Ethical Hacking", tag: "pentest", def: "Ataque simulado e autorizado para melhorar segurança." },
    { term: "Enumeration", tag: "pentest", def: "Coleta detalhada de informações técnicas após reconhecimento." },
    { term: "Evil Twin", tag: "network", def: "Ponto de acesso Wi-Fi falso para interceptacao de tráfego." },
    { term: "Exploit", tag: "pentest", def: "Código/acao que explora vulnerabilidade para causar impacto." },
    { term: "Exploit Development", tag: "pentest", def: "Criação de exploit funcional para vulnerabilidade específica." },
    { term: "Exposure Management", tag: "defense", def: "Priorizacao e redução de exposições reais com contexto de risco." },
    { term: "False Positive / False Negative", tag: "defense", def: "Balanceamento entre alerta incorreto e ameaca não detectada." },
    { term: "File Inclusion (LFI/RFI)", tag: "web", def: "Inclusao indevida de arquivos locais/remotos por falha de validação." },
    { term: "Fileless Malware", tag: "malware", def: "Malware que opera sem arquivo em disco, geralmente em memoria." },
    { term: "Firewall", tag: "defense", def: "Filtro de tráfego de rede baseado em politica de segurança." },
    { term: "Forensic Imaging", tag: "forensics", def: "Copia bit a bit para análise sem alterar evidência original." },
    { term: "Fuzzing", tag: "pentest", def: "Envio de entradas inesperadas para encontrar falhas e crashes." },
    { term: "Golden Ticket", tag: "pentest", def: "Forja de TGT Kerberos com hash krbtgt para acesso amplo no AD." },
    { term: "GPO Abuse", tag: "pentest", def: "Abuso de Group Policy para executar acao maliciosa em massa." },
    { term: "Gray Box Testing", tag: "pentest", def: "Teste com conhecimento parcial do alvo." },
    { term: "Hacktivism", tag: "social", def: "Atividade ofensiva motivada por causa ideológica." },
    { term: "Hash Cracking", tag: "pentest", def: "Recuperacao de senha a partir de hash por ataques offline." },
    { term: "Heap Spray", tag: "pentest", def: "Alocacao massiva de payload para aumentar chance de execução." },
    { term: "Honey Pot", tag: "defense", def: "Sistema isca para atrair atacante e coletar inteligencia." },
    { term: "Honeytoken", tag: "defense", def: "Artefato isca usado para alertar acesso indevido." },
    { term: "HTTP Request Smuggling", tag: "web", def: "Ambiguidade de parsing HTTP entre camadas com efeitos de desvio." },
    { term: "HTTPS Downgrade Attack", tag: "network", def: "Forca rebaixamento para canal menos seguro." },
    { term: "IAM", tag: "defense", def: "Gestao de identidades e acessos em sistemas e nuvem." },
    { term: "IAST", tag: "web", def: "Teste de segurança com instrumentacao durante execução da aplicação." },
    { term: "IDOR", tag: "web", def: "Falha de autorização por referencia direta a objeto." },
    { term: "Indicators of Attack (IoA)", tag: "defense", def: "Sinais de comportamento indicando ataque em andamento." },
    { term: "Indicators of Compromise (IoC)", tag: "defense", def: "Artefatos que indicam comprometimento já ocorrido." },
    { term: "Incident Response Plan (IRP)", tag: "defense", def: "Plano formal de preparacao, contencao, erradicacao e recuperacao." },
    { term: "Infostealer", tag: "malware", def: "Malware focado em credenciais, cookies, tokens e carteiras." },
    { term: "Injection (SQL, Command, LDAP)", tag: "web", def: "Entrada não confiavel interpretada como comando/código." },
    { term: "Insider Threat", tag: "defense", def: "Risco gerado por usuário interno intencional ou acidental." },
    { term: "Intrusion Detection System (IDS)", tag: "defense", def: "Sistema de detecção de ataques por assinatura e anomalia." },
    { term: "IoT Botnet", tag: "malware", def: "Rede de dispositivos IoT comprometidos para ataques coordenados." },
    { term: "ITDR", tag: "defense", def: "Detecção e resposta a ameaças focadas em identidade." },
    { term: "JWT (JSON Web Token)", tag: "web", def: "Token de autenticação/autorização com riscos de validação inadequada." },
    { term: "Kerberoasting", tag: "pentest", def: "Ataque para extrair e quebrar hashes de contas de serviço no AD." },
    { term: "Keylogger", tag: "malware", def: "Captura de teclas para roubo de credenciais e dados sensíveis." },
    { term: "Kill Chain (Cyber)", tag: "pentest", def: "Modelo de fases de um ataque cibernético fim a fim." },
    { term: "Kubernetes Hardening", tag: "defense", def: "Boas praticas de segurança para clusters e workloads Kubernetes." },
    { term: "Lateral Movement", tag: "pentest", def: "Movimento entre sistemas após acesso inicial." },
    { term: "Leak Site (DLS)", tag: "malware", def: "Site usado por extorsao para publicar dados roubados." },
    { term: "Least Privilege (PoLP)", tag: "defense", def: "Concessao do minimo privilégio necessario para cada identidade." },
    { term: "Living off the Land (LOTL)", tag: "pentest", def: "Uso de ferramentas legitimas para reduzir detecção." },
    { term: "LOLBAS / LOLBins", tag: "pentest", def: "Binarios nativos explorados para execução e evasao." },
    { term: "Log Poisoning", tag: "web", def: "Injecao de payload em logs visando execução ou abuso posterior." },
    { term: "MDR", tag: "defense", def: "Serviço gerenciado de detecção e resposta com especialistas." },
    { term: "MFA", tag: "defense", def: "Autenticação com dois ou mais fatores de verificação." },
    { term: "MFA Fatigue Attack", tag: "social", def: "Bombardeio de prompts MFA para forcar aprovacao indevida." },
    { term: "MISP", tag: "defense", def: "Plataforma colaborativa de compartilhamento de threat intelligence." },
    { term: "MITM (Man-in-the-Middle)", tag: "network", def: "Interceptação de comunicação entre duas partes." },
    { term: "MITRE ATT&CK", tag: "defense", def: "Base de técnicas adversarias para detecção e threat hunting." },
    { term: "NAC", tag: "network", def: "Controle de acesso de dispositivos e usuários a rede." },
    { term: "NDR", tag: "defense", def: "Detecção e resposta com foco em telemetria de rede." },
    { term: "Network Segmentation", tag: "defense", def: "Separacao de redes para conter impacto e lateral movement." },
    { term: "NGAV", tag: "defense", def: "Antivirus de nova geracao com análise comportamental." },
    { term: "NHI (Non-Human Identity)", tag: "defense", def: "Identidade de maquina/serviço para autenticação entre sistemas." },
    { term: "NIST Cybersecurity Framework (NIST CSF)", tag: "defense", def: "Framework de referencia para governanca de segurança." },
    { term: "Nmap", tag: "pentest", def: "Scanner de rede para descoberta de hosts, portas e serviços." },
    { term: "NTLM Relay", tag: "pentest", def: "Reencaminhamento de autenticação NTLM para acesso indevido." },
    { term: "OAuth Misconfiguration", tag: "web", def: "Falhas de implementacao OAuth/OIDC com risco de takeover." },
    { term: "Onion Service (.onion)", tag: "network", def: "Serviço acessível na rede Tor com endereços .onion." },
    { term: "Open Redirect", tag: "web", def: "Redirecionamento para destino arbitrario explorado em phishing." },
    { term: "OSINT", tag: "pentest", def: "Coleta de inteligencia por fontes publicas abertas." },
    { term: "OWASP Top 10", tag: "web", def: "Lista de riscos web mais criticos para conscientizacao e mitigacao." },
    { term: "PAM", tag: "defense", def: "Gestao e controle de acessos privilegiados." },
    { term: "Pass-the-Hash (PtH)", tag: "pentest", def: "Autenticação com hash NTLM sem conhecer senha em texto claro." },
    { term: "Pass-the-Ticket (PtT)", tag: "pentest", def: "Uso indevido de tickets Kerberos roubados." },
    { term: "Password Spraying", tag: "pentest", def: "Teste de senha comum em muitas contas para evitar lockout." },
    { term: "Patch Management", tag: "defense", def: "Gestao de atualizações de segurança e remediação de CVEs." },
    { term: "Payload", tag: "pentest", def: "Código executado após exploração bem-sucedida." },
    { term: "Penetration Testing", tag: "pentest", def: "Simulação controlada de ataque para validar risco real." },
    { term: "Persistence", tag: "pentest", def: "Técnicas para manter acesso após reboot/remediação parcial." },
    { term: "Phishing", tag: "social", def: "Engenharia social para roubo de dados e credenciais." },
    { term: "Pivoting", tag: "pentest", def: "Uso de host comprometido como salto para outros segmentos." },
    { term: "PKI", tag: "crypto", def: "Infraestrutura de chaves publicas e certificados digitais." },
    { term: "Port Scanning", tag: "pentest", def: "Mapeamento de portas abertas para identificar superfície de ataque." },
    { term: "Post-Exploitation", tag: "pentest", def: "Fase de consolidacao após acesso inicial." },
    { term: "Pretexting", tag: "social", def: "Narrativa falsa para induzir confiança e obter acesso." },
    { term: "Privilege Escalation", tag: "pentest", def: "Obtencao de privilégios superiores no sistema alvo." },
    { term: "Purple Team", tag: "defense", def: "Colaboracao ofensiva e defensiva para melhorar detecções." },
    { term: "Quarantine", tag: "defense", def: "Isolamento de host/arquivo para contencao de incidente." },
    { term: "Quishing", tag: "social", def: "Phishing via QR code para redirecionar a fraude." },
    { term: "RaaS (Ransomware-as-a-Service)", tag: "malware", def: "Modelo de aluguel de ransomware para afiliados." },
    { term: "Rainbow Table", tag: "crypto", def: "Tabela precomputada para acelerar quebra de hashes sem salt." },
    { term: "Ransomware", tag: "malware", def: "Malware que cifra dados e exige pagamento de resgate." },
    { term: "RBAC", tag: "defense", def: "Controle de acesso por papeis e funcoes." },
    { term: "RCE", tag: "pentest", def: "Execução remota de código arbitrario no alvo." },
    { term: "Reconnaissance", tag: "pentest", def: "Etapa de coleta de informações antes da exploração." },
    { term: "Red Team", tag: "pentest", def: "Equipe ofensiva que simula atacante real." },
    { term: "Reverse Engineering", tag: "forensics", def: "Análise de binarios para entender lógica interna." },
    { term: "Reverse Shell", tag: "pentest", def: "Shell em que a vítima inicia conexão para o atacante." },
    { term: "Risk-Based Vulnerability Management (RBVM)", tag: "defense", def: "Priorizacao de vulnerabilidades por risco real." },
    { term: "Rootkit", tag: "malware", def: "Malware de ocultacao e persistencia em alto privilégio." },
    { term: "Runtime Application Self-Protection (RASP)", tag: "defense", def: "Protecao embarcada na aplicação durante execução." },
    { term: "SASE", tag: "defense", def: "Arquitetura que integra rede e segurança como serviço." },
    { term: "SAST", tag: "web", def: "Análise estatica de código para detectar fraquezas cedo." },
    { term: "SBOM", tag: "defense", def: "Inventario de componentes de software e dependencias." },
    { term: "Security Misconfiguration", tag: "web", def: "Configuração insegura em app, servidor ou cloud." },
    { term: "SIEM", tag: "defense", def: "Correlacao de logs para detecção e investigação." },
    { term: "SIM Swapping", tag: "social", def: "Fraude de troca de chip para interceptar OTP e recuperar contas." },
    { term: "Silver Ticket", tag: "pentest", def: "Forja de ticket de serviço Kerberos (TGS)." },
    { term: "Smishing", tag: "social", def: "Phishing por SMS ou app de mensagem." },
    { term: "Social Engineering", tag: "social", def: "Manipulação psicologica para obter dados/acesso." },
    { term: "SOC", tag: "defense", def: "Centro de operações de segurança para monitoramento 24x7." },
    { term: "SOC-as-a-Service (SOCaaS)", tag: "defense", def: "Operação SOC gerenciada por terceiro." },
    { term: "SOAR", tag: "defense", def: "Orquestracao e automacao de resposta a incidentes." },
    { term: "Spear Phishing", tag: "social", def: "Phishing direcionado a alvo específico com alta personalizacao." },
    { term: "SQL Injection (SQLi)", tag: "web", def: "Injecao SQL por entrada não tratada." },
    { term: "SSRF", tag: "web", def: "Forca servidor a requisitar recursos internos/externos arbitrarios." },
    { term: "Steganography", tag: "crypto", def: "Ocultacao de dados dentro de outros arquivos." },
    { term: "STRIDE", tag: "defense", def: "Framework de threat modeling da Microsoft." },
    { term: "STIX/TAXII", tag: "defense", def: "Padrões de representacao e troca de threat intelligence." },
    { term: "Subdomain Takeover", tag: "web", def: "Sequestro de subdominio por dangling DNS." },
    { term: "Supply Chain Attack", tag: "malware", def: "Ataque via fornecedor, dependencia ou pipeline." },
    { term: "Tabletop Exercise", tag: "defense", def: "Simulação de incidente para treino e validação de processos." },
    { term: "Threat Actor", tag: "defense", def: "Entidade adversaria que conduz atividade maliciosa." },
    { term: "Threat Feed", tag: "defense", def: "Fluxo continuo de inteligencia de ameaças." },
    { term: "Threat Hunting", tag: "defense", def: "Busca proativa de ataque não detectado por regras comuns." },
    { term: "Threat Intelligence", tag: "defense", def: "Conhecimento acionavel sobre atores, TTPs e indicadores." },
    { term: "Threat Modeling", tag: "defense", def: "Modelagem de ameaças e controles por risco." },
    { term: "Token Impersonation", tag: "pentest", def: "Uso indevido de token de segurança de outro contexto." },
    { term: "Tor (The Onion Router)", tag: "network", def: "Rede de anonimato com roteamento em camadas." },
    { term: "Traffic Analysis", tag: "network", def: "Análise de padrões de tráfego para detectar anomalias e C2." },
    { term: "Triage", tag: "defense", def: "Classificacao de alertas por criticidade e prioridade de resposta." },
    { term: "TTP", tag: "defense", def: "Táticas, técnicas e procedimentos de adversários." },
    { term: "UEBA", tag: "defense", def: "Análise comportamental de usuário e entidade para detectar anomalias." },
    { term: "User Awareness Training", tag: "defense", def: "Treinamento continuo contra phishing, fraude e erro operacional." },
    { term: "VDP", tag: "pentest", def: "Programa formal para recebimento de reportes de vulnerabilidade." },
    { term: "Virtual Private Cloud (VPC)", tag: "network", def: "Segmento logico isolado em nuvem." },
    { term: "Vishing", tag: "social", def: "Fraude por voz para obter credenciais e dados sensíveis." },
    { term: "Vulnerability Assessment", tag: "pentest", def: "Identificacao e classificacao de vulnerabilidades sem exploração total." },
    { term: "Vulnerability Management", tag: "defense", def: "Ciclo de identificar, priorizar, corrigir e revalidar falhas." },
    { term: "WAF", tag: "defense", def: "Firewall para aplicação web e filtragem HTTP/HTTPS." },
    { term: "Watering Hole Attack", tag: "social", def: "Comprometimento de site frequentado por alvo específico." },
    { term: "Web Cache Poisoning", tag: "web", def: "Manipulação de cache para servir resposta maliciosa a usuários." },
    { term: "Web Shell", tag: "web", def: "Script malicioso para controle remoto via HTTP." },
    { term: "Whaling", tag: "social", def: "Phishing altamente direcionado a executivos." },
    { term: "Wiper Malware", tag: "malware", def: "Malware destrutivo focado em apagar/corromper dados." },
    { term: "Wordlist Attack", tag: "pentest", def: "Ataque de senha baseado em listas de palavras e mutações." },
    { term: "WPA2/WPA3 Cracking", tag: "network", def: "Quebra de credencial Wi-Fi por captura de handshake e cracking offline." },
    { term: "XDR", tag: "defense", def: "Detecção e resposta estendida correlacionando múltiplas fontes." },
    { term: "XSS", tag: "web", def: "Execução de script malicioso no navegador da vítima." },
    { term: "XXE", tag: "web", def: "Abuso de entidades XML externas para leitura de arquivo/SSRF." },
    { term: "YARA", tag: "forensics", def: "Linguagem de regras para identificar malware por padrao." },
    { term: "Zero-Day (0-day)", tag: "pentest", def: "Vulnerabilidade sem patch disponivel no momento da exploração." },
    { term: "Zero Trust", tag: "defense", def: "Modelo de acesso sem confiança implicita e verificação continua." },
    { term: "Zone Transfer (AXFR)", tag: "pentest", def: "Transferência DNS indevida que revela zona e infraestrutura." },
    { term: "ZTNA", tag: "defense", def: "Acesso de rede por identidade e contexto no modelo zero trust." },

    { term: "Account Checker", tag: "social", def: "Automacao para validar combinacoes usuário/senha oriundas de vazamentos." },
    { term: "Amcache", tag: "forensics", def: "Artefato do Windows com histórico de execução de binarios para investigação." },
    { term: "AMSI Bypass", tag: "malware", def: "Técnicas para contornar inspecção de scripts feita pelo Anti-Malware Scan Interface." },
    { term: "Anti-Detect Browser", tag: "social", def: "Navegador voltado a mascarar fingerprint e operar múltiplas identidades de fraude." },
    { term: "Artifact Triage", tag: "forensics", def: "Priorizacao rapida de artefatos relevantes durante resposta a incidente." },
    { term: "Browser Credential Theft", tag: "malware", def: "Roubo de senhas, cookies e tokens armazenados em navegadores." },
    { term: "Carding", tag: "social", def: "Fraude com dados de cartão comprometidos em compras e revenda clandestina." },
    { term: "Carding Forum", tag: "social", def: "Forum clandestino de compra/venda de cartões, contas e tutoriais de fraude." },
    { term: "CI/CD Secret Exfiltration", tag: "defense", def: "Roubo de segredos em pipelines para pivotar para cloud e sistemas internos." },
    { term: "Clipper Malware", tag: "malware", def: "Malware que troca endereços de carteira no clipboard para desviar transacoes." },
    { term: "Cloud Lateral Movement", tag: "defense", def: "Movimento lateral entre contas, subscriptions e workloads em nuvem." },
    { term: "Cloud Metadata Service Attack", tag: "defense", def: "Abuso de serviço de metadata para obter credenciais de instancia." },
    { term: "CloudTrail / Audit Log Evasion", tag: "defense", def: "Técnicas para reduzir rastreabilidade e cobertura de logs em cloud." },
    { term: "Combo List", tag: "social", def: "Lista de combinacoes usuário:senha usada em credential stuffing e ATO." },
    { term: "Conditional Access", tag: "defense", def: "Politicas de acesso baseadas em contexto, risco e postura de dispositivo." },
    { term: "Cookie Theft", tag: "malware", def: "Roubo de cookies de sessão para takeover sem senha." },
    { term: "Credential Market", tag: "social", def: "Mercado clandestino de credenciais, cookies e logs de stealer." },
    { term: "CVV2 Shop", tag: "social", def: "Loja clandestina para comercializacao de dados de cartão com CVV." },
    { term: "ETW Bypass", tag: "malware", def: "Técnica para dificultar telemetria de eventos em execução no Windows." },
    { term: "Event Log Tampering", tag: "forensics", def: "Manipulação ou limpeza de logs para ocultar trilhas de comprometimento." },
    { term: "Fraud-as-a-Service (FaaS)", tag: "social", def: "Oferta de kits, infraestrutura e operação de fraude como serviço." },
    { term: "Fullz", tag: "social", def: "Pacote completo de dados pessoais usado para fraude financeira e identidade." },
    { term: "Genesis-like Market", tag: "social", def: "Mercado de logs e identidades digitais para takeover e fraude direcionada." },
    { term: "Golden SAML", tag: "defense", def: "Forja de assertions SAML após comprometimento de chave de assinatura de IdP." },
    { term: "Identity Federation", tag: "defense", def: "Confiança entre provedores de identidade e serviços via SAML/OIDC." },
    { term: "Identity Governance and Administration (IGA)", tag: "defense", def: "Governanca de ciclo de vida de identidades, acessos e recertificacao." },
    { term: "IMDS Abuse", tag: "defense", def: "Abuso do Instance Metadata Service para capturar credenciais temporarias." },
    { term: "Initial Access Broker (IAB)", tag: "social", def: "Ator que vende acessos iniciais comprometidos para afiliados de ransomware." },
    { term: "IR Playbook", tag: "defense", def: "Procedimento operacional detalhado para resposta padronizada por tipo de incidente." },
    { term: "KMS Key Misuse", tag: "defense", def: "Uso indevido de chaves criptograficas gerenciadas para acesso ou exfiltração." },
    { term: "Kubernetes RBAC Abuse", tag: "defense", def: "Escalada em cluster por permissoes excessivas em roles e bindings." },
    { term: "Loader Malware", tag: "malware", def: "Malware especializado em entregar payloads adicionais e manter cadeia de infeccao." },
    { term: "Logs Shop", tag: "social", def: "Mercado de logs roubados por stealers com sessões, cookies e credenciais." },
    { term: "Malware Loader Chain", tag: "malware", def: "Sequencia de estágios de carga usada para evasao e modularidade do malware." },
    { term: "Memory Forensics", tag: "forensics", def: "Análise de memoria volatil para encontrar processos, injeções e credenciais." },
    { term: "MFT Analysis", tag: "forensics", def: "Análise de Master File Table para reconstruir atividade de arquivos no NTFS." },
    { term: "Mule Account", tag: "social", def: "Conta usada para receber e movimentar valores oriundos de fraude." },
    { term: "OAuth Consent Phishing", tag: "social", def: "Fraude que induz usuário a conceder escopos OAuth a app malicioso." },
    { term: "OIDC Misconfiguration", tag: "defense", def: "Falhas em OpenID Connect que permitem token abuse ou account takeover." },
    { term: "OTP Bot", tag: "social", def: "Automacao de chamadas/mensagens para coletar OTP em tempo real." },
    { term: "OTP Relay", tag: "social", def: "Intermediacao em tempo real de codigos MFA durante fraude de autenticação." },
    { term: "Prefetch Analysis", tag: "forensics", def: "Uso de artefatos prefetch para inferir execução de programas no Windows." },
    { term: "Process Hollowing", tag: "malware", def: "Técnica de injecao que substitui memoria de processo legitimo por payload." },
    { term: "Refund Fraud", tag: "social", def: "Fraude que explora politicas de reembolso com identidade/compra comprometida." },
    { term: "Reflective DLL Injection", tag: "malware", def: "Carregamento de DLL diretamente em memoria sem uso convencional de disco." },
    { term: "Registry Forensics", tag: "forensics", def: "Investigacao de chaves/valores do registro para persistencia e timeline." },
    { term: "SAML Token Forgery", tag: "defense", def: "Falsificacao de token SAML para impersonacao em ambientes federados." },
    { term: "SCIM Provisioning Risk", tag: "defense", def: "Risco em fluxo de provisionamento automático de contas e privilégios." },
    { term: "Secrets Management", tag: "defense", def: "Práticas e ferramentas para ciclo de vida seguro de segredos e credenciais." },
    { term: "Service Principal Abuse", tag: "defense", def: "Abuso de identidades de aplicação com permissoes excessivas em cloud." },
    { term: "Session Hijacking", tag: "social", def: "Sequestro de sessão autenticada por cookie, token ou canal interceptado." },
    { term: "Shimcache / AppCompatCache", tag: "forensics", def: "Artefato de compatibilidade usado para inferir execuções historicas." },
    { term: "Sigma Rules", tag: "defense", def: "Padrao generico para descrever regras de detecção convertiveis para SIEM/EDR." },
    { term: "SRUM Analysis", tag: "forensics", def: "Análise de consumo e atividade de sistema via banco SRUM no Windows." },
    { term: "Stealer-as-a-Service (SaaS)", tag: "malware", def: "Modelo de aluguel de infostealer com painel, builder e afiliados." },
    { term: "Stealer Logs Market", tag: "social", def: "Mercado de logs exfiltrados contendo credenciais, cookies e autofill." },
    { term: "Synthetic Identity Fraud", tag: "social", def: "Fraude com identidade hibrida criada a partir de dados reais e ficticios." },
    { term: "Timeline Analysis", tag: "forensics", def: "Reconstrucao cronologica de eventos para entender vetor, impacto e escopo." },
    { term: "Velociraptor", tag: "forensics", def: "Plataforma para coleta e investigação em endpoints com foco DFIR." },
    { term: "Web Inject", tag: "malware", def: "Injecao maliciosa em paginas para capturar credenciais e dados financeiros." },
    { term: "Workload Identity Federation", tag: "defense", def: "Federacao de identidade de workload sem segredo estatico de longa duracao." },

    { term: "Android Malware Analysis", tag: "mobile", def: "Análise de APKs e comportamento malicioso em ambiente Android." },
    { term: "APK Reversing", tag: "mobile", def: "Engenharia reversa de app Android para auditar lógica, segredos e protecoes." },
    { term: "Frida", tag: "mobile", def: "Framework de instrumentacao dinamica para observar e alterar comportamento de apps." },
    { term: "Jailbreak/Root Detection Bypass", tag: "mobile", def: "Técnicas para contornar validações de root/jailbreak em aplicativos." },
    { term: "MAST (Mobile Application Security Testing)", tag: "mobile", def: "Conjunto de técnicas para avaliar segurança de apps mobile em estatico e dinamico." },
    { term: "Mobile Device Management (MDM)", tag: "mobile", def: "Gestao centralizada de politicas, configuração e conformidade de dispositivos moveis." },
    { term: "Mobile Threat Defense (MTD)", tag: "mobile", def: "Controles para detectar phishing, malware e risco de rede em dispositivos moveis." },
    { term: "Smali", tag: "mobile", def: "Linguagem intermediaria Dalvik usada em análise e modificacao de APKs." },

    { term: "Adversary Emulation", tag: "pentest", def: "Simulação de TTPs de grupos reais para validar controles e detecções." },
    { term: "Android Exported Components Abuse", tag: "mobile", def: "Abuso de componentes exportados para executar acoes sem autorização adequada." },
    { term: "API Pentesting", tag: "web", def: "Avaliacao de segurança em APIs REST/GraphQL focando autenticação, autorização e lógica." },
    { term: "AS-REP Roasting", tag: "pentest", def: "Ataque Kerberos contra contas sem pre-auth para quebra offline de hash." },
    { term: "Assumed Breach", tag: "pentest", def: "Modelo de teste que parte da premissa de comprometimento inicial já obtido." },
    { term: "BadUSB", tag: "pentest", def: "Abuso de firmware USB para emulacao de teclado/rede e execução de comandos." },
    { term: "BOLA (Broken Object Level Authorization)", tag: "web", def: "Falha de autorização em API que permite acesso a objeto de outro usuário." },
    { term: "Breach Simulation", tag: "pentest", def: "Simulação de violação para medir prontidão de detecção e resposta." },
    { term: "Business Logic Abuse", tag: "web", def: "Exploração de regras de negócio para fraude ou acesso indevido." },
    { term: "C2 Redirector", tag: "pentest", def: "Camada intermediaria para ocultar servidor C2 real e reduzir exposição direta." },
    { term: "Certificate Pinning", tag: "mobile", def: "Mecanismo que restringe certificados aceitos por app para reduzir MITM." },
    { term: "Cobalt Strike Beacon", tag: "pentest", def: "Agente de pos-exploração usado em simulacoes red team e adversary emulation." },
    { term: "Credentialed API Scanning", tag: "web", def: "Varredura de API autenticada para ampliar cobertura de testes de segurança." },
    { term: "Deep Link Hijacking", tag: "mobile", def: "Sequestro de deeplink para redirecionar fluxo e capturar dados/sessões." },
    { term: "DMA Attack", tag: "pentest", def: "Ataque via acesso direto a memoria por interfaces/perifericos." },
    { term: "Domain Fronting for C2", tag: "pentest", def: "Uso de infra intermediaria para mascarar destino de tráfego C2." },
    { term: "Evil Maid Attack", tag: "pentest", def: "Comprometimento físico de dispositivo sem supervisao do proprietario." },
    { term: "External Red Team", tag: "pentest", def: "Exercício ofensivo simulando atacante externo sem acesso interno prévio." },
    { term: "GraphQL Injection", tag: "web", def: "Injecao e abuso de resolvers/esquema GraphQL para acesso indevido." },
    { term: "Hardware Implant", tag: "pentest", def: "Dispositivo inserido fisicamente para espionagem, persistencia ou exfiltração." },
    { term: "HID Injection", tag: "pentest", def: "Injecao de comandos por dispositivo que emula teclado humano." },
    { term: "Insecure Deserialization", tag: "web", def: "Desserializacao insegura que pode permitir execução de código ou fraude lógica." },
    { term: "Internal Red Team", tag: "pentest", def: "Exercício ofensivo simulando atacante com presença na rede interna." },
    { term: "iOS Keychain Abuse", tag: "mobile", def: "Abuso de itens armazenados no keychain para takeover ou elevacao de acesso." },
    { term: "LAPS Abuse", tag: "pentest", def: "Abuso de credenciais locais gerenciadas para movimento lateral em AD." },
    { term: "Mass Assignment", tag: "web", def: "Atribuição indevida de campos sensíveis por binding automático em API." },
    { term: "Mobile Runtime Instrumentation", tag: "mobile", def: "Inspeção e alteração de comportamento de app em tempo de execução." },
    { term: "NFC Relay Attack", tag: "network", def: "Reencaminhamento de comunicação NFC para fraude de autenticação/pagamento." },
    { term: "O.MG Cable", tag: "pentest", def: "Cabo malicioso com capacidade de injecao de comandos e controle remoto." },
    { term: "OAuth Device Code Phishing", tag: "social", def: "Fraude que explora fluxo device code para obter consentimento/token." },
    { term: "OPSEC", tag: "pentest", def: "Disciplina de segurança operacional para reduzir rastros e exposição da operação." },
    { term: "Payload Staging", tag: "pentest", def: "Entrega em estágios para reduzir assinatura e melhorar evasao." },
    { term: "Proxmark3", tag: "network", def: "Plataforma para pesquisa ofensiva/defensiva em RFID, NFC e proximidade." },
    { term: "Red Team Infrastructure (RTI)", tag: "pentest", def: "Conjunto de dominios, redirectors, C2 e automacao para operação red team." },
    { term: "RFID Cloning", tag: "network", def: "Copia de credenciais RFID para bypass de controle físico." },
    { term: "Secure Enclave", tag: "mobile", def: "Coprocessador de segurança para isolamento de chaves e operações sensíveis." },
    { term: "Side-Channel Attack", tag: "crypto", def: "Ataque por vazamento indireto de informação como tempo, consumo ou EM." },
    { term: "Sliver C2", tag: "pentest", def: "Framework C2 moderno usado em simulacoes de adversario e red team." },
    { term: "SSL Pinning Bypass", tag: "mobile", def: "Contorno de pinning para permitir inspeção de tráfego em testes autorizados." },
    { term: "Stager", tag: "pentest", def: "Componente inicial de payload responsável por baixar/carregar estágio seguinte." },
    { term: "Supply Chain Hardware Tampering", tag: "defense", def: "Manipulação de hardware na cadeia de suprimentos antes da entrega." },
    { term: "UAC Bypass", tag: "pentest", def: "Técnicas para elevar privilégio no Windows evitando prompt UAC." },
    { term: "USB Rubber Ducky", tag: "pentest", def: "Dispositivo de emulacao HID para automacao de comandos em testes físicos." }
];

terms.sort((a, b) => a.term.localeCompare(b.term));

let currentFilter = "all";
let searchQuery = "";
let useRegexSearch = false;
let useWholeWordSearch = false;
let currentPage = 1;
const termsPerPage = 40;

function getTagLabel(tag) {
    const labels = {
        pentest: "Pentest",
        network: "Redes",
        web: "Web",
        mobile: "Mobile",
        malware: "Malware",
        crypto: "Criptografia",
        social: "Eng. Social",
        defense: "Defesa",
        forensics: "Forense"
    };
    return labels[tag] || tag;
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

function buildLetterIndex(visibleTerms) {
    const letters = {};
    visibleTerms.forEach((t) => {
        const l = t.term[0].toUpperCase();
        letters[l] = (letters[l] || 0) + 1;
    });

    const idx = document.getElementById("letterIndex");
    idx.innerHTML = Object.entries(letters)
        .sort()
        .map(
            ([l, c]) =>
                `<div class="letter-group"><a class="letter-link" onclick="scrollToLetter('${l}')">${l} <span class="count">${c}</span></a></div>`
        )
        .join("");
}

function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSearchRegex(query) {
    if (!query) return null;

    if (useRegexSearch) {
        return new RegExp(query, "i");
    }

    if (useWholeWordSearch) {
        return new RegExp(`\\b${escapeRegExp(query)}\\b`, "i");
    }

    return new RegExp(escapeRegExp(query), "i");
}

function highlightText(text, query, searchRegex) {
    if (!query || !searchRegex) return text;
    const highlighter = new RegExp(`(${searchRegex.source})`, "gi");
    return text.replace(highlighter, "<mark>$1</mark>");
}

function localizeDefinition(definition) {
    const replacements = [
        [/\bcloud-native\b/gi, "nativo em nuvem"],
        [/\bruntime\b/gi, "tempo de execução"],
        [/\bmisconfigurations\b/gi, "configurações incorretas"],
        [/\bfingerprinting\b/gi, "impressão digital"],
        [/\btakeover\b/gi, "sequestro de conta"],
        [/\bpayloads\b/gi, "cargas úteis"],
        [/\bpayload\b/gi, "carga útil"],
        [/\bredirectors\b/gi, "redirecionadores"],
        [/\bredirector\b/gi, "redirecionador"],
        [/\bbinding\b/gi, "vinculação"],
        [/\bapps\b/gi, "aplicações"],
        [/\bapp\b/gi, "aplicação"],
        [/\bcloud\b/gi, "nuvem"]
    ];

    return replacements.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), definition);
}

function getFilteredTerms() {
    const query = searchQuery.trim();
    let regexError = false;
    let searchRegex = null;

    if (query) {
        try {
            searchRegex = getSearchRegex(query);
        } catch (_error) {
            regexError = true;
        }
    }

    const filtered = terms.filter((t) => {
        const matchFilter = currentFilter === "all" || t.tag === currentFilter;
        if (!query) return matchFilter;
        if (!searchRegex) return false;

        const localizedDef = localizeDefinition(t.def);
        const matchSearch = searchRegex.test(t.term) || searchRegex.test(t.def) || searchRegex.test(localizedDef);
        return matchFilter && matchSearch;
    });

    return { filtered, regexError, searchRegex };
}

function getRelatedTools(termObj) {
    const exactTools = {
        "DoS / DDoS": ["Slowloris", "hping3", "MHDDoS", "LOIC"],
        "SQL Injection (SQLi)": ["sqlmap", "Burp Suite", "jSQL", "OWASP ZAP"],
        "XSS": ["Burp Suite", "Dalfox", "XSStrike", "BeEF"],
        "OSINT": ["Maltego", "theHarvester", "Amass", "Shodan"],
        "Port Scanning": ["Nmap", "Masscan", "RustScan", "Naabu"],
        "SSRF": ["Burp Suite", "SSRFmap", "Gopherus", "Nuclei"],
        "Kerberoasting": ["Impacket GetUserSPNs", "Rubeus", "Hashcat", "John the Ripper"],
        "DCSync": ["Mimikatz", "Impacket secretsdump", "Rubeus", "BloodHound"],
        "NTLM Relay": ["Impacket ntlmrelayx", "Responder", "Coercer", "PetitPotam"],
        "Pass-the-Hash (PtH)": ["Mimikatz", "Impacket psexec", "CrackMapExec", "Evil-WinRM"],
        "Reverse Engineering": ["Ghidra", "IDA Pro", "x64dbg", "Radare2"],
        "Malware Analysis": ["ANY.RUN", "Cuckoo Sandbox", "Ghidra", "Procmon"],
        "SIEM": ["Splunk", "Elastic", "Microsoft Sentinel", "IBM QRadar"],
        "SOC": ["Wazuh", "TheHive", "Cortex", "Elastic SIEM"],
        "SOAR": ["Shuffle", "Splunk SOAR", "Cortex XSOAR", "Tines"],
        "Dark Web": ["Tor Browser", "OnionSearch", "Maltego", "DarkOwl"],
        "Deep Web": ["Shodan", "Censys", "FOFA", "Amass"],
        "Tor (The Onion Router)": ["Tor Browser", "Whonix", "OnionScan", "Ahmia"],
        "Phishing": ["GoPhish", "SET", "Evilginx2", "King Phisher"],
        "WAF": ["ModSecurity", "Cloudflare WAF", "AWS WAF", "F5 ASM"],

        "Carding": ["Maltego", "SpiderFoot", "Recorded Future", "Chainalysis"],
        "Credential Market": ["Flare", "SOCRadar", "SpyCloud", "Constella"],
        "Stealer Logs Market": ["Flare", "SOCRadar", "KELA", "Constella"],
        "Initial Access Broker (IAB)": ["MISP", "OpenCTI", "Microsoft Sentinel", "Maltego"],
        "Fullz": ["SpyCloud", "Have I Been Pwned", "Constella", "SOCRadar"],

        "Memory Forensics": ["Volatility", "Rekall", "MemProcFS", "Redline"],
        "Timeline Analysis": ["Plaso log2timeline", "Timesketch", "Autopsy", "Velociraptor"],
        "Registry Forensics": ["RegRipper", "Eric Zimmermans Tools", "KAPE", "Velociraptor"],
        "MFT Analysis": ["MFTECmd", "analyzeMFT", "Autopsy", "Plaso"],
        "Prefetch Analysis": ["PECmd", "Zimmerman Tools", "KAPE", "Velociraptor"],

        "Loader Malware": ["ANY.RUN", "CAPE Sandbox", "YARA", "Ghidra"],
        "Stealer-as-a-Service (SaaS)": ["YARA", "Sigma", "Velociraptor", "Microsoft Defender XDR"],
        "Process Hollowing": ["Sysmon", "Procmon", "x64dbg", "PE-sieve"],
        "AMSI Bypass": ["AMSITrigger", "Defender for Endpoint", "Sysmon", "Sigma"],
        "ETW Bypass": ["SilkETW", "Sysmon", "KrabsETW", "Velociraptor"],

        "Conditional Access": ["Microsoft Entra", "Defender for Cloud Apps", "Okta", "Duo"],
        "Golden SAML": ["AD FS Auditing", "Microsoft Sentinel", "Elastic", "Splunk"],
        "OAuth Consent Phishing": ["Microsoft Defender for Cloud Apps", "Entra ID", "Okta", "Proofpoint"],
        "IMDS Abuse": ["Prowler", "ScoutSuite", "AWS GuardDuty", "Defender for Cloud"],
        "Service Principal Abuse": ["Prowler", "AzureHound", "Defender for Cloud", "Entra Permissions Management"],
        "CI/CD Secret Exfiltration": ["TruffleHog", "Gitleaks", "Semgrep Secrets", "GitHub Secret Scanning"],

        "MAST (Mobile Application Security Testing)": ["MobSF", "Burp Suite", "Frida", "Objection"],
        "Android Malware Analysis": ["Jadx", "MobSF", "Frida", "apktool"],
        "APK Reversing": ["Jadx", "apktool", "Bytecode Viewer", "Ghidra"],
        "Jailbreak/Root Detection Bypass": ["Frida", "Objection", "Magisk", "Cycript"],
        "Mobile Device Management (MDM)": ["Microsoft Intune", "VMware Workspace ONE", "Jamf", "Ivanti EPMM"],
        "Mobile Threat Defense (MTD)": ["Microsoft Defender for Endpoint", "Zimperium", "Lookout", "Wandera"],
        "Frida": ["Frida", "Objection", "r2frida", "Burp Suite"],

        "Adversary Emulation": ["MITRE Caldera", "Cobalt Strike", "Atomic Red Team", "Prelude Operator"],
        "API Pentesting": ["Burp Suite", "Postman", "OWASP ZAP", "Insomnia"],
        "BOLA (Broken Object Level Authorization)": ["Burp Suite", "Postman", "OWASP ZAP", "ffuf"],
        "GraphQL Injection": ["InQL", "GraphQLmap", "Burp Suite", "Clairvoyance"],
        "Mass Assignment": ["Burp Suite", "Postman", "OWASP ZAP", "Schemathesis"],
        "SSL Pinning Bypass": ["Frida", "Objection", "apk-mitm", "Burp Suite"],
        "USB Rubber Ducky": ["Hak5 PayloadStudio", "USB Rubber Ducky", "DuckToolkit", "Flipper Zero"],
        "BadUSB": ["USB Rubber Ducky", "Flipper Zero", "Digispark", "P4wnP1"],
        "O.MG Cable": ["O.MG Cable", "Wireshark", "tcpdump", "Bettercap"],
        "RFID Cloning": ["Proxmark3", "ChameleonMini", "libnfc", "mfoc"],
        "NFC Relay Attack": ["Proxmark3", "NFC Tools", "libnfc", "ChameleonUltra"],
        "AS-REP Roasting": ["Rubeus", "Impacket GetNPUsers", "Hashcat", "BloodHound"],
        "UAC Bypass": ["UACME", "PowerUp", "Seatbelt", "WinPwn"],
        "LAPS Abuse": ["LAPSToolkit", "CrackMapExec", "BloodHound", "PowerView"],
        "Sliver C2": ["Sliver", "Mythic", "Havoc", "Nginx"],
        "Cobalt Strike Beacon": ["Cobalt Strike", "Malleable C2", "Nmap", "BloodHound"]
    };

    if (exactTools[termObj.term]) return exactTools[termObj.term];

    const name = termObj.term.toLowerCase();
    if (name.includes("ddos") || name.includes("dos")) return ["Slowloris", "hping3", "MHDDoS", "Scapy"];
    if (name.includes("phishing") || name.includes("smishing") || name.includes("vishing") || name.includes("pretext")) return ["GoPhish", "SET", "Evilginx2", "Maltego"];
    if (name.includes("forensic") || name.includes("dfir") || name.includes("imaging") || name.includes("timeline") || name.includes("registry") || name.includes("mft") || name.includes("prefetch")) return ["Autopsy", "Volatility", "KAPE", "Velociraptor"];
    if (name.includes("ransom") || name.includes("malware") || name.includes("rootkit") || name.includes("infostealer") || name.includes("loader") || name.includes("hollowing") || name.includes("injection") || name.includes("wiper")) return ["YARA", "Volatility", "Ghidra", "ANY.RUN"];
    if (name.includes("mobile") || name.includes("android") || name.includes("ios") || name.includes("apk") || name.includes("frida") || name.includes("jailbreak") || name.includes("root detection")) return ["MobSF", "Frida", "Objection", "Jadx"];
    if (name.includes("api") || name.includes("graphql") || name.includes("bola") || name.includes("mass assignment") || name.includes("deserialization")) return ["Burp Suite", "Postman", "OWASP ZAP", "ffuf"];
    if (name.includes("red team") || name.includes("adversary") || name.includes("opsec") || name.includes("beacon") || name.includes("c2") || name.includes("stager")) return ["MITRE Caldera", "Sliver", "Cobalt Strike", "Nmap"];
    if (name.includes("usb") || name.includes("rfid") || name.includes("nfc") || name.includes("hardware") || name.includes("hid") || name.includes("dma") || name.includes("evil maid")) return ["Proxmark3", "Flipper Zero", "USB Rubber Ducky", "Wireshark"];
    if (name.includes("cloud") || name.includes("cnapp") || name.includes("cwpp") || name.includes("cspm") || name.includes("identity") || name.includes("oauth") || name.includes("saml") || name.includes("service principal") || name.includes("workload")) return ["Prowler", "ScoutSuite", "Wiz", "Defender for Cloud"];
    if (name.includes("carding") || name.includes("credential market") || name.includes("fullz") || name.includes("combo") || name.includes("fraud") || name.includes("logs shop")) return ["Maltego", "SpiderFoot", "MISP", "OpenCTI"];

    const byTag = {
        pentest: ["Nmap", "Burp Suite", "Metasploit", "ffuf"],
        network: ["Wireshark", "tcpdump", "Nmap", "Zeek"],
        web: ["Burp Suite", "OWASP ZAP", "Nuclei", "ffuf"],
        mobile: ["MobSF", "Frida", "Objection", "Jadx"],
        malware: ["Ghidra", "YARA", "Volatility", "Cuckoo Sandbox"],
        crypto: ["OpenSSL", "Hashcat", "John the Ripper", "GPG"],
        social: ["GoPhish", "SET", "Maltego", "Recon-ng"],
        defense: ["Wazuh", "Suricata", "Splunk", "Velociraptor"],
        forensics: ["Autopsy", "Volatility", "KAPE", "Sleuth Kit"]
    };

    return byTag[termObj.tag] || ["Nmap", "Wireshark", "Burp Suite", "Wazuh"];
}

function renderTools(termObj) {
    const tools = getRelatedTools(termObj);
    const chips = tools.map((tool) => `<span class="cmd">${escapeHtml(tool)}</span>`).join(" ");
    return `<div class="term-tools"><span class="tools-label">Ferramentas associadas:</span> ${chips}</div>`;
}

function renderGlossary() {
    const { filtered, regexError, searchRegex } = getFilteredTerms();

    const totalPages = Math.max(1, Math.ceil(filtered.length / termsPerPage));
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * termsPerPage;
    const pageTerms = filtered.slice(start, start + termsPerPage);

    document.getElementById("visible-count").textContent = pageTerms.length;
    document.getElementById("total-count").textContent = terms.length;

    const searchCountEl = document.getElementById("searchCount");
    if (!searchQuery) {
        searchCountEl.textContent = "";
    } else if (regexError) {
        searchCountEl.textContent = "regex inválida";
    } else {
        searchCountEl.textContent = `${filtered.length} resultado${filtered.length !== 1 ? "s" : ""}`;
    }

    const pageInfo = document.getElementById("pageInfo");
    const prevBtn = document.getElementById("prevPageBtn");
    const nextBtn = document.getElementById("nextPageBtn");

    pageInfo.textContent = `Pagina ${currentPage} de ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    const content = document.getElementById("glossaryContent");
    if (filtered.length === 0) {
        content.innerHTML = `<div class="empty-state"><div class="code">0</div><p>Nenhum termo encontrado para "<span style="color:var(--green)">${searchQuery}</span>"</p></div>`;
        buildLetterIndex([]);
        return;
    }

    const byLetter = {};
    pageTerms.forEach((t) => {
        const l = t.term[0].toUpperCase();
        if (!byLetter[l]) byLetter[l] = [];
        byLetter[l].push(t);
    });

    content.innerHTML = Object.entries(byLetter)
        .sort()
        .map(
            ([letter, ts]) => `
	  <div class="letter-section" id="letter-${letter}">
		<div class="letter-header">
		  <span class="letter-char">${letter}</span>
		  <div class="letter-line"></div>
		</div>
		${ts
                    .map(
                        (t) => `
			<div class="term-card" id="card-${slugify(t.term)}" onclick="toggleCard(this)">
			  <div class="term-header">
                <span class="term-name">${highlightText(t.term, searchQuery, searchRegex)}</span>
				<span class="term-tag tag-${t.tag}">${getTagLabel(t.tag)}</span>
				<span class="term-toggle">></span>
			  </div>
			  <div class="term-body">
                <div class="term-def">${localizeDefinition(t.def)}${renderTools(t)}</div>
			  </div>
			</div>
		  `
                    )
                    .join("")}
	  </div>
	`
        )
        .join("");

    buildLetterIndex(pageTerms);
}

function toggleCard(card) {
    const isExpanded = card.classList.contains("expanded");

    document.querySelectorAll(".term-card.expanded").forEach((openCard) => {
        openCard.classList.remove("expanded");
    });

    if (!isExpanded) {
        card.classList.add("expanded");
    }
}

function scrollToLetter(l) {
    const el = document.getElementById(`letter-${l}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.getElementById("searchInput").addEventListener("input", function () {
    searchQuery = this.value.trim();
    currentPage = 1;
    renderGlossary();
});

document.getElementById("filterBar").addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    currentPage = 1;
    renderGlossary();
});

document.getElementById("wordToggle").addEventListener("click", function () {
    useWholeWordSearch = !useWholeWordSearch;
    if (useWholeWordSearch) {
        useRegexSearch = false;
        document.getElementById("regexToggle").classList.remove("active");
    }
    this.classList.toggle("active", useWholeWordSearch);
    currentPage = 1;
    renderGlossary();
});

document.getElementById("regexToggle").addEventListener("click", function () {
    useRegexSearch = !useRegexSearch;
    if (useRegexSearch) {
        useWholeWordSearch = false;
        document.getElementById("wordToggle").classList.remove("active");
    }
    this.classList.toggle("active", useRegexSearch);
    currentPage = 1;
    renderGlossary();
});

document.getElementById("prevPageBtn").addEventListener("click", function () {
    if (currentPage > 1) {
        currentPage -= 1;
        renderGlossary();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});

document.getElementById("nextPageBtn").addEventListener("click", function () {
    const filteredCount = getFilteredTerms().filtered.length;
    const totalPages = Math.max(1, Math.ceil(filteredCount / termsPerPage));

    if (currentPage < totalPages) {
        currentPage += 1;
        renderGlossary();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});

window.scrollToLetter = scrollToLetter;
window.toggleCard = toggleCard;

renderGlossary();
