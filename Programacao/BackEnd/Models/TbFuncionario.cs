using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    [Table("tb_funcionario")]
    public partial class TbFuncionario
    {
        public TbFuncionario()
        {
            TbConsulta = new HashSet<TbConsulta>();
            TbPerfilAcesso = new HashSet<TbPerfilAcesso>();
        }

        [Key]
        [Column("id_funcionario")]
        public int IdFuncionario { get; set; }
        [Column("id_login")]
        public int IdLogin { get; set; }
        [Column("ds_telefone", TypeName = "varchar(15)")]
        public string DsTelefone { get; set; }
        [Required]
        [Column("nm_funcionario", TypeName = "varchar(60)")]
        public string NmFuncionario { get; set; }
        [Required]
        [Column("ds_cpf", TypeName = "varchar(14)")]
        public string DsCpf { get; set; }
        [Required]
        [Column("ds_cep", TypeName = "varchar(9)")]
        public string DsCep { get; set; }
        [Column("ds_complemento", TypeName = "varchar(45)")]
        public string DsComplemento { get; set; }
        [Required]
        [Column("ds_sexo", TypeName = "varchar(2)")]
        public string DsSexo { get; set; }
        [Column("ds_nis", TypeName = "varchar(45)")]
        public string DsNis { get; set; }
        [Column("dt_nascimento", TypeName = "datetime")]
        public DateTime DtNascimento { get; set; }
        [Column("ds_cro", TypeName = "varchar(45)")]
        public string DsCro { get; set; }
        [Required]
        [Column("ds_logradouro", TypeName = "varchar(45)")]
        public string DsLogradouro { get; set; }
        [Required]
        [Column("ds_estado", TypeName = "varchar(45)")]
        public string DsEstado { get; set; }
        [Column("ds_alergico_medicacao", TypeName = "varchar(45)")]
        public string DsAlergicoMedicacao { get; set; }
        [Column("ds_alergico_refeicao", TypeName = "varchar(45)")]
        public string DsAlergicoRefeicao { get; set; }
        [Column("nr_residencial")]
        public int NrResidencial { get; set; }

        [ForeignKey(nameof(IdLogin))]
        [InverseProperty(nameof(TbLogin.TbFuncionario))]
        public virtual TbLogin IdLoginNavigation { get; set; }
        [InverseProperty("IdFuncionarioNavigation")]
        public virtual ICollection<TbConsulta> TbConsulta { get; set; }
        [InverseProperty("IdFuncionarioNavigation")]
        public virtual ICollection<TbPerfilAcesso> TbPerfilAcesso { get; set; }
    }
}
